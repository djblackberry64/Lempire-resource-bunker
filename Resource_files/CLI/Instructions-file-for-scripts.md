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

Yes, your **Windows (PowerShell)** guide is already very good — and yes, **it will work** as written. It follows standard best practices for making a PowerShell script feel like a real command on Windows. But we can make it:

* **Cleaner and slightly more accurate**
* **More consistent with your Linux/macOS version**
* **Include key caveats explicitly**

Below is your polished and corrected version, ready to be included in your full cross-platform setup documentation.

---

## ✅ Windows (PowerShell) — Make `runcode` Feel Like a Native Command

There are two good approaches:

* **Option A**: Use a persistent PowerShell alias (**easy**, works in interactive PowerShell)
* **Option B (Recommended)**: Create a tiny `.cmd` wrapper to support **cmd, scripts, tasks, and cross-shell use**

---

### 0. 💾 Save the script

Save your PowerShell script as:

```
C:\Tools\runcode.ps1
```

> ✅ You can use another folder, but keep the path short and simple (e.g., no spaces).

---

### 1. 🔐 Allow local scripts to run (one-time setup)

Open **PowerShell as your user** (not admin), and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Confirm with `Y`.

> 🛡️ This allows local scripts to run — but still blocks untrusted remote scripts unless signed.

---

### 2A. 🧪 Option A: Persistent alias (PowerShell only)

Add an alias to your PowerShell profile:

```powershell
# Create profile if it doesn't exist
if (!(Test-Path -Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }

# Open it in Notepad (or your preferred editor)
notepad $PROFILE
```

Then add this line:

```powershell
Set-Alias runcode "C:\Tools\runcode.ps1"
```

Save, close, then **restart PowerShell**.

✅ Now you can run `runcode` in PowerShell.

❌ Doesn’t work in **cmd**, **task scheduler**, or **scripts**. For that, use Option B.

---

### 2B. ✅ Option B (Recommended): CMD wrapper (works everywhere)

Create a new file:

```
C:\Tools\runcode.cmd
```

Put this content inside:

```cmd
@echo off
powershell -ExecutionPolicy Bypass -File "C:\Tools\runcode.ps1" %*
```

This wrapper makes `runcode` work in:

* PowerShell
* Command Prompt (cmd)
* Windows Run box
* Scripts
* Task Scheduler
* Dev tools

---

### 3. 📦 Add `C:\Tools` to your PATH (once)

#### 🧠 Option 1: GUI (recommended)

1. Press **Win + S**, type: `environment variables`
2. Click **Edit the system environment variables**
3. Under "User variables", find **Path** → Edit → **New**
4. Add:

```
C:\Tools
```

5. Click OK on all dialogs, then **open a new PowerShell or CMD window**

#### ⚙️ Option 2: CLI (PowerShell)

```powershell
setx PATH "$($env:PATH);C:\Tools"
```

> ⚠️ This edits the **user** PATH permanently, but doesn’t affect current shells — open a new one to see the change.

---

### 4. 🚀 Test it

```powershell
runcode "C:\path\to\your\File.java"
```

Or in `cmd.exe`:

```cmd
runcode C:\path\to\your\File.java
```

✅ You should see your script’s output.

---

### 🔍 Troubleshooting

| Problem                                           | Solution                                                                    |
| ------------------------------------------------- | --------------------------------------------------------------------------- |
| `runcode not found`                               | Open a new terminal after editing PATH                                      |
| “Command exists in current location, not in PATH” | Use: `.\runcode.ps1`, or add alias or wrapper as above                      |
| `ExecutionPolicy` blocked the script              | Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` |
| `runcode.cmd` exists but does nothing             | Check the path inside the `.cmd` file — it must match your `.ps1` path      |

---

### 🔁 Quick verification commands

#### PowerShell

```powershell
# Check script exists
Test-Path C:\Tools\runcode.ps1

# Show if Tools is in PATH
$env:PATH -split ';' | Where-Object { $_ -match 'C:\\Tools' }

# Run the script
runcode "C:\full\path\to\File.java"
```

#### CMD

```cmd
runcode C:\full\path\to\File.java
```
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
