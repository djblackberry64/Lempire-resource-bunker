Got it ✅ I’ll adapt your `apt`-based setup guide into one that works for Arch Linux users with `sudo pacman` (and a few `yay`/AUR mentions where needed). Here’s the translated version of your document:

---

# 💻 Full Dev Environment Setup (Arch / Manjaro / EndeavourOS)

## 1. Update system packages

```bash
sudo pacman -Syu --noconfirm
sudo pacman -S --needed base-devel git curl wget unzip
```

---

## 2. Java (for all `vscjava.*` extensions)

```bash
sudo pacman -S --needed jdk-openjdk maven gradle
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
sudo pacman -S --needed python python-pip python-virtualenv
pip install --upgrade pip
pip install black pylint jupyter ipykernel
```

* Sets up Python interpreter, virtual environments, Jupyter support.
* Needed for `ms-python.*` and `ms-toolsai.jupyter.*`.

---

## 4. Node.js / NPM (for web dev and VS Code extensions)

```bash
sudo pacman -S --needed nodejs npm
npm install -g typescript eslint prettier
```

* Required for `ecmel.vscode-html-css`, `pranaygp.vscode-css-peek`, `esbenp.prettier-vscode`.

---

## 5. Rust (for `rust-analyzer`)

```bash
sudo pacman -S --needed rustup
rustup default stable
rustc --version
cargo --version
```

* Installs Rust toolchain.
* Needed for Rust projects with `rust-analyzer`.

---

## 6. Dart / Flutter

```bash
cd $HOME
git clone https://github.com/flutter/flutter.git -b stable
echo 'export PATH="$HOME/flutter/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

flutter doctor
```

* Installs Flutter SDK and adds it to PATH.
* Needed for `dart-code.dart-code` and `dart-code.flutter`.

---

## 7. SQL / Database Tools

```bash
sudo pacman -S --needed sqlite postgresql-libs mariadb-clients
```

* Optional: install servers if you want local DBs:

```bash
sudo pacman -S --needed postgresql mariadb
```

---

## 8. VS Code / Code Runner / Live Preview support

* VS Code can be installed via AUR (binary version):

```bash
yay -S visual-studio-code-bin
```

* Or install OSS build:

```bash
sudo pacman -S code
```

* Install extensions:

```bash
code --install-extension alefragnani.bookmarks
code --install-extension alefragnani.project-manager
# ...repeat for each extension
```

* Optional: verify Code Runner executors:

```json
"code-runner.executorMap": {
    "java": "javac $fileName && java $fileNameWithoutExt",
    "python": "python -u",
    "rust": "cargo run",
    "dart": "dart run"
}
```

---

## 9. Git + GitHub setup

**Option A: HTTPS + PAT**

* Generate PAT → use in VS Code Git prompt.

**Option B: SSH (recommended)**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
```

---

## 10. Optional: Misc tools

```bash
sudo pacman -S --needed clang gdb lldb zip unzip
```

---

### ✅ TL;DR Workflow (Arch)

1. `sudo pacman -Syu`
2. Install `jdk-openjdk maven gradle`
3. Install `python python-pip` + Jupyter packages
4. Install `nodejs npm` + TypeScript/ESLint/Prettier
5. Install Rust via `rustup`
6. Clone & set up Flutter
7. Install DB clients/servers
8. Install VS Code + extensions
9. Configure GitHub authentication
10. Add misc dev tools
