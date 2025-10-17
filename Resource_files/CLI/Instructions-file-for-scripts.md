Nice — here’s a clean, **English**, step-by-step guide so `runcode` becomes a first-class command on **Linux** and **Windows** (PowerShell). I’ll show both the quick path (works fast) and the robust path (permanent, nice). Keep it open in a terminal and copy/paste the exact commands.

---

## ✅ Final: Clean, Professional Guide — Make `runcode` a Global Command on Linux/macOS/WSL

> This guide walks you through making a script (`runcode`) behave like a real command, available everywhere on your system. It covers both the **quick setup** and the **robust CLI-style setup**.

---

### 🖥️ For: Linux / macOS / WSL (Bash or Zsh)

---

### 1. 🗂️ Put the script in a tools folder

Create a folder (if it doesn’t exist) and move your script there:

```bash
mkdir -p ~/Tools
mv /path/to/your/script.sh ~/Tools/runcode
```

> ✅ Rename the file to just `runcode` — no `.sh` for cleaner CLI usage.

---

### 2. ⚙️ Set the correct shebang and line endings

**Edit the first line** of `~/Tools/runcode` and make sure it has one of these:

```bash
#!/usr/bin/env bash
# or
#!/bin/bash
```

**Fix Windows line endings** if you copied it from Windows:

```bash
# If dos2unix is installed:
dos2unix ~/Tools/runcode

# Or use sed:
sed -i 's/\r$//' ~/Tools/runcode
```

---

### 3. ✅ Make the script executable

```bash
chmod +x ~/Tools/runcode
```

You can check it:

```bash
ls -l ~/Tools/runcode
# Should show something like: -rwxr-xr-x
```

---

### 4. 🚀 Make `runcode` available system-wide

#### Option A: 🧪 Quick (user-only): Add an alias

```bash
echo 'alias runcode="$HOME/Tools/runcode"' >> ~/.bashrc
source ~/.bashrc
```

> ✅ Works immediately in interactive terminals
> ❌ Does **not** work in scripts or child processes

---

#### Option B (Recommended): Add `~/Tools` to your PATH

This makes anything in `~/Tools` available like a native command.

```bash
echo 'export PATH="$HOME/Tools:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

> ✅ Works in all shells and scripts
> 🔄 Open a new terminal or re-source your shell to apply changes

---

#### Option C (System-wide): Move the script to a standard bin directory

```bash
sudo mv ~/Tools/runcode /usr/local/bin/runcode
```

> `/usr/local/bin` is already in your system PATH
> ✅ Works for all users (if needed)

---

### 5. 🧪 Test it!

```bash
which runcode   # should return something like: /usr/local/bin/runcode or /home/you/Tools/runcode
runcode         # runs your script
```

---

### 🔍 Troubleshooting

| Problem                         | Solution                                                                                                                     |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `command not found`             | Restart terminal or `source ~/.bashrc`. Check if PATH or alias is set.                                                       |
| `Permission denied`             | Run `chmod +x ~/Tools/runcode`                                                                                               |
| `bad interpreter: No such file` | Fix the shebang and convert Windows line endings (`dos2unix`)                                                                |
| File "disappears" after moving  | If you accidentally created `/usr/local/bin/runcode` as a **directory**, remove with:<br>`sudo rm -r /usr/local/bin/runcode` |

---

### 💡 Pro Tip (Optional): Create a `~/bin` folder for personal scripts

If you prefer, use `~/bin` (many Linux distros already include it in your PATH):

```bash
mkdir -p ~/bin
mv ~/Tools/runcode ~/bin/runcode
```

No need to modify PATH if `~/bin` is already included.

---

Let me know if you'd like this exported as a **Markdown**, **PDF**, or **snippet** for reuse in a blog or internal doc.

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
