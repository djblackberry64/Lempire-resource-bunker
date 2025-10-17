# ✅ Clean, Cross-Platform Guide — Make `runcode` a Global Command (Linux / Windows)

> This guide shows how to make a script called `runcode` behave like a real CLI command, available everywhere on your system — both on **Linux/macOS/WSL** and **Windows (PowerShell)**. It supports quick setup and permanent, robust configuration.

---

# 🖥️ Linux / macOS / WSL — Setup for `runcode`

---

### 1. 🗂️ Put the script in a tools folder

```bash
mkdir -p ~/Tools
mv /path/to/your/script.sh ~/Tools/runcode
```

> ✅ Rename the file to just `runcode` — no `.sh` for cleaner CLI usage.

---

### 2. ⚙️ Set the correct shebang and line endings

Make sure the **first line** of `~/Tools/runcode` is:

```bash
#!/usr/bin/env bash
# or
#!/bin/bash
```

Convert line endings if copied from Windows:

```bash
# If dos2unix is installed:
dos2unix ~/Tools/runcode

# Or use sed:
sed -i 's/\r$//' ~/Tools/runcode
```

To view and verify file contents:

```bash
cat ~/Tools/runcode
```

---

### 3. ✅ Make the script executable

```bash
chmod +x ~/Tools/runcode
```

Verify:

```bash
ls -l ~/Tools/runcode
# Should start with: -rwx
```

---

### 4. 🚀 Make `runcode` available globally

#### Option A: Quick alias (interactive use only)

```bash
echo 'alias runcode="$HOME/Tools/runcode"' >> ~/.bashrc
```

Refresh the shell environment:

```bash
. ~/.bashrc
```

> ✅ Quick
> 
> ❌ Not available in scripts or child shells

---

#### Option B (Recommended): Add `~/Tools` to PATH

```bash
echo 'export PATH="$HOME/Tools:$PATH"' >> ~/.bashrc
. ~/.bashrc
```

> ✅ Works in all environments and scripts

---

#### Option C (System-wide): Install to standard bin directory

```bash
sudo mv ~/Tools/runcode /usr/local/bin/runcode
```

> ✅ Works for all users
> `/usr/local/bin` is already in PATH

---

### 5. 🧪 Test the command

```bash
which runcode
runcode
```

---

### 🔍 Troubleshooting

| Problem                        | Solution                                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| `command not found`            | Run `. ~/.bashrc` or reopen terminal; check PATH or alias                                       |
| `Permission denied`            | Ensure the script is executable: `chmod +x ~/Tools/runcode`                                     |
| `bad interpreter` error        | Fix shebang and convert line endings (`dos2unix`)                                               |
| Script "disappears" after move | If `/usr/local/bin/runcode` is a directory, remove it with: `sudo rm -r /usr/local/bin/runcode` |

---

### 💡 Pro Tip: Use `~/bin` for personal CLI tools

Many Linux distributions include `~/bin` in your PATH by default.

```bash
mkdir -p ~/bin
mv ~/Tools/runcode ~/bin/runcode
```

If `~/bin` is in your PATH, no need to update `.bashrc`.

---

### 💡 Quick Pro Tip: Add alias *and* PATH fallback in one line

This adds both an alias and ensures `~/Tools` is in your PATH — ideal for `.bashrc` or `.zshrc`.

```bash
[ -x "$HOME/Tools/runcode" ] && case ":$PATH:" in *":$HOME/Tools:"*) ;; *) export PATH="$HOME/Tools:$PATH" ;; esac && alias runcode="$HOME/Tools/runcode"
```

> ✅ One-liner: minimal setup
>
> 🔁 Add it to `~/.bashrc` or `~/.zshrc`, then run `. ~/.bashrc` to apply
> 
> If you use Zsh instead of Bash, add these commands to ~/.zshrc instead.

---

# ✅ Windows (PowerShell) — Make `runcode` Feel Like a Native Command
> This guide targets Windows PowerShell; for PowerShell Core (pwsh), most steps are similar but the profile path may differ.

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
>
> ⚠️ Note on PATH editing:
 Using setx appends to your user PATH permanently but doesn’t check for duplicates. Running it multiple times may cause repeated entries. If unsure, edit PATH via GUI or manually verify to keep it clean.

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

## 📋 Final Cross-Check Commands---



---

### Linux/macOS

```bash
ls -l ~/Tools/runcode        # check permissions
which runcode                # verify it's in PATH
cat ~/Tools/runcode          # view script
runcode /path/to/file.java   # test it
```

### Windows (PowerShell)

```powershell
Test-Path C:\Tools\runcode.ps1                     # check script exists
$env:PATH -split ';' | Select-String 'C:\\Tools'   # verify PATH
runcode "C:\path\to\file.java"                     # run it
.\C:\Tools\runcode.ps1 "C:\path\to\file.java"      # fallback if alias isn't set
```

---

## ✅ Final Checklist

* `runcode` has the correct shebang (`#!/usr/bin/env bash` or PowerShell)
* Script is executable on Linux (`chmod +x`)
* Script is in `~/Tools`, `~/bin`, or `/usr/local/bin` (Linux)
* Or in `C:\Tools` with `.cmd` wrapper (Windows)
* Alias and/or PATH updated in `.bashrc` / PowerShell profile
* New terminal opened or `. ~/.bashrc` run to refresh environment

---
