Nice — here’s a clean, **English**, step-by-step guide so `runcode` becomes a first-class command on **Linux** and **Windows** (PowerShell). I’ll show both the quick path (works fast) and the robust path (permanent, nice). Keep it open in a terminal and copy/paste the exact commands.

---

# Linux / macOS (Bash / WSL) — make `runcode` available everywhere

### 1) Put the script in a folder

Example: use `~/Tools`

```bash
mkdir -p ~/Tools
# copy or save your script to ~/Tools/runcode  (recommended: no .sh in the name)
```

### 2) Ensure a correct shebang and Unix line endings

Open the file and ensure the first line is either:

```bash
#!/usr/bin/env bash
# or
#!/bin/bash
```

If you copied it from Windows, convert CRLF → LF:

```bash
# if dos2unix is available:
dos2unix ~/Tools/runcode
# or with sed:
sed -i 's/\r$//' ~/Tools/runcode
```

### 3) Make the script executable

```bash
chmod +x ~/Tools/runcode
ls -l ~/Tools/runcode   # should show -rwxr-xr-x or similar
```

### 4A) Quick: add a permanent alias (easy, user-only)

Append alias to `~/.bashrc` (or `~/.zshrc` if you use zsh):

```bash
echo 'alias runcode="$HOME/Tools/runcode"' >> ~/.bashrc
source ~/.bashrc
```

Now `runcode` works immediately in interactive shells.

### 4B) Alternative (recommended if you want it like a real CLI): add Tools to PATH

Append this to `~/.bashrc` (or `~/.profile` / `~/.zshrc` as you prefer):

```bash
echo 'export PATH="$HOME/Tools:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Or move the script to a standard executable folder:

```bash
sudo mv ~/Tools/runcode /usr/local/bin/runcode
# (now /usr/local/bin is usually already in PATH)
```

### 5) Test

```bash
which runcode        # should print path, e.g. /home/you/Tools/runcode or /usr/local/bin/runcode
runcode /path/to/file.java
```

### Quick troubleshooting checklist

* `command not found` → PATH/alias not loaded; open a new terminal or `source ~/.bashrc`.
* `Permission denied` → forgot `chmod +x`.
* `bad interpreter: No such file or directory` → wrong shebang or CRLFs still present (`dos2unix`).

---

# Windows (PowerShell) — make `runcode` feel native

There are two common approaches: **(A)** use a persistent PowerShell alias (easy) or **(B)** create a tiny `runcode.cmd` wrapper so you can type `runcode` anywhere (best for cmd / scripts / cross-shell).

### 0) Save the script

Save the PowerShell script as:

```
C:\Tools\runcode.ps1
```

(Use `C:\Tools` or any folder you prefer.)

### 1) Allow local script execution (one-time)

Open PowerShell **as your user** and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Confirm `Y` if prompted. This lets local signed or local scripts run.

### 2A) Easy permanent alias (PowerShell profile)

Make a permanent alias by editing your PowerShell profile:

```powershell
# create profile if missing
if (!(Test-Path -Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }

# open in Notepad (or your editor)
notepad $PROFILE
```

Add this line to the opened file:

```powershell
Set-Alias runcode "C:\Tools\runcode.ps1"
```

Save, close, then open a **new PowerShell** session. `runcode` will now run.

> Note: `Set-Alias` is only available to interactive sessions — which is exactly what you want for a convenient CLI.

### 2B) Best: CMD wrapper so `runcode` works everywhere (cmd, PS, tasks)

Create `C:\Tools\runcode.cmd` with this content:

```bat
@echo off
powershell -ExecutionPolicy Bypass -File "C:\Tools\runcode.ps1" %*
```

Because `.cmd`/`.bat` are recognized by Windows shells, typing `runcode arg1 arg2` will run your PS script with arguments.

### 3) Add `C:\Tools` to PATH (so you can type `runcode` anywhere)

**Via GUI** (recommended for safety):

* Start → “Environment Variables” → Edit user variables → Path → New → `C:\Tools` → OK → open a new shell.

**Or via PowerShell:**

```powershell
setx PATH "$($env:PATH);C:\Tools"
```

(You must open a **new** console for the change to be visible.)

### 4) Test

Open a **new PowerShell or CMD** window:

```powershell
runcode "C:\path\to\your\File.java"
# or in cmd:
runcode C:\path\to\your\File.java
```

### Troubleshooting

* If PowerShell says `runcode` not found: open a new shell (PATH changes take effect only in new shells).
* If it prints: “The command 'runcode' was not found but does exist in the current location” — run `.\runcode.ps1` when in that folder, or use the wrapper / alias method above.
* If scripts are blocked: re-run `Set-ExecutionPolicy` (CurrentUser) as shown.

---

# Quick cross-check commands (copy/paste)

**Linux**

```bash
# check file exists and permissions
ls -l ~/Tools/runcode
# refresh shell (if you edited rc)
source ~/.bashrc
# see which executable is used
which runcode
# run test
runcode /full/path/to/file
```

**Windows (PowerShell)**

```powershell
# check script exists
Test-Path C:\Tools\runcode.ps1
# show current PATH
$env:PATH -split ';' | Select-String 'C:\\Tools'
# test the command
runcode "C:\full\path\to\file.java"
# or if alias not made:
.\C:\Tools\runcode.ps1 "C:\full\path\to\file.java"
```

---

# Final little checklist before you celebrate

* Script has `#!/usr/bin/env bash` (Linux) or valid PowerShell content (Windows).
* Script file is executable on Linux (`chmod +x`).
* `~/Tools` / `C:\Tools` is **exact name** (watch capitalization on Linux).
* You added either `alias` or placed the file in PATH (or created wrapper on Windows).
* Always open a **new terminal** after PATH/profile edits.

---

If you want, I’ll drop two tiny snippets you can paste right now:

* one line to add to your `~/.bashrc` (alias + PATH fallback),
* and a ready-to-paste `runcode.cmd` wrapper for Windows — pick one and I’ll paste it. Which would you like?
