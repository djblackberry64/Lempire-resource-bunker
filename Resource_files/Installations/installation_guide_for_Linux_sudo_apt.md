Absolutely — let’s make a **complete setup guide for your Ubuntu/Mint Linux VM** so your full language stack works with all your VS Code extensions. I’ll assume you’re using the user `djblackberry4` (with sudo rights) and VS Code already installed.

---

# 💻 Full Dev Environment Setup (Ubuntu / Linux Mint)

## 1. Update system packages

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y software-properties-common curl build-essential git wget unzip
```

---

## 2. Java (for all `vscjava.*` extensions)

```bash
sudo apt install -y default-jdk maven gradle
java -version
javac -version
mvn -version
gradle -version
```

* Installs JDK, Maven, Gradle.
* Needed for `redhat.java` and Java extensions.

---

## 3. Python (for Python extensions and Jupyter)

```bash
sudo apt install -y python3 python3-pip python3-venv python3-dev
pip3 install --upgrade pip
pip3 install black pylint jupyter ipykernel
```

* Sets up Python interpreter, virtual environments, Jupyter support.
* Needed for `ms-python.*` and `ms-toolsai.jupyter.*`.

---

## 4. Node.js / NPM (for web dev and VS Code extensions)

```bash
sudo apt install -y nodejs npm
npm install -g typescript eslint prettier
```

* Required for `ecmel.vscode-html-css`, `pranaygp.vscode-css-peek`, `esbenp.prettier-vscode`.
* TypeScript and ESLint help for JS/TS projects.

---

## 5. Rust (for `rust-analyzer`)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
rustc --version
cargo --version
```

* Installs Rust toolchain.
* Needed for Rust projects with `rust-analyzer`.

---

## 6. Dart / Flutter

```bash
# Download Flutter SDK
cd $HOME
git clone https://github.com/flutter/flutter.git -b stable
echo 'export PATH="$HOME/flutter/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

flutter doctor
After the analysis from flutter doctor you might want to run the following commands
sudo apt install cmake
sudo apt install ninja-build
sudo apt install libgtk-3-dev
For Android studio use
1. the already preinstalled version (check with snap "android-studio")
2. Or just search for it in your distributions software store and download from there if you don't have it.

```

* Installs Flutter SDK and adds it to PATH.
* Needed for `dart-code.dart-code` and `dart-code.flutter` extensions.

---

## 7. SQL / Database Tools

```bash
sudo apt install -y sqlite3 mysql-client postgresql-client
```

* Optional: install servers if you want local DBs:

```bash
sudo apt install -y mysql-server postgresql
```

* Works with `ms-mssql.*`, `mtxr.sqltools`, and general SQL development.

---

## 8. VS Code / Code Runner / Live Preview support

* VS Code should already be installed.
* Make sure integrated terminal works (`Ctrl + `` `).
* Install extensions from your list if not already installed:

```bash
code --install-extension alefragnani.bookmarks
code --install-extension alefragnani.project-manager
# ...repeat for each extension in your list
```

* Optional: verify Code Runner executors:

```json
"code-runner.executorMap": {
    "java": "javac $fileName && java $fileNameWithoutExt",
    "python": "python3 -u",
    "rust": "cargo run",
    "dart": "dart run"
}
```

---

## 9. Git + GitHub setup

**Option A: HTTPS + Personal Access Token**

* Generate PAT on GitHub → enter username + PAT in VS Code Git prompt.

**Option B: SSH (recommended)**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Copy this to GitHub Settings → SSH and GPG Keys
ssh -T git@github.com
```

* After this, push/pull works without passwords.

---

## 10. Optional: Misc tools

```bash
sudo apt install -y clang gdb lldb zip unzip
```

* Supports C/C++, debugging, compression.
* Covers `vadimcn.vscode-lldb` and `ms-toolsai.*` extensions.

---

### ✅ TL;DR Workflow

1. Update OS + install build essentials
2. Install Java + Maven + Gradle
3. Install Python + pip + Jupyter
4. Install Node.js + NPM + TS/ESLint/Prettier
5. Install Rust via rustup
6. Install Flutter SDK
7. Install database clients/servers
8. Configure VS Code extensions & Code Runner
9. Set up GitHub authentication (SSH recommended)

---
For VSCode please follow the turtorial from The Odin project linked <a href="https://www.theodinproject.com/lessons/foundations-text-editors">here</a>
