#!/bin/bash

# ---------------------------
# 1 System Update
# ---------------------------
sudo apt update && sudo apt upgrade -y

# ---------------------------
# 2 Firefox removal
# ---------------------------
sudo apt purge -y firefox
sudo apt autoremove -y


# ---------------------------
# 3 Programming Installations & Package Managers
# ---------------------------

sudo apt install default-jdk \
python3 \
python3-pip \
git \
curl \
wget -y

# ---------------------------
# 4 Tools
# ---------------------------
curl -f https://zed.dev/install.sh | sh
curl -fsS https://dl.brave.com/install.sh | sh
sudo snap install localsend

# ---------------------------
# 5 Brave as Standard Browser
# ---------------------------
xdg-settings set default-web-browser brave-browser.desktop
sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /usr/bin/brave-browser 100
sudo update-alternatives --set x-www-browser /usr/bin/brave-browser

# ---------------------------
# 6 Create Desktop Shortcuts
# ---------------------------
DESKTOP_DIR="$HOME/Desktop"

# Shortcut für Zed
cat <<EOF > "$DESKTOP_DIR/Zed.desktop"
[Desktop Entry]
Name=Zed
Comment=Lightweight Code Editor
Exec=zed
Icon=zed
Terminal=false
Type=Application
Categories=Development;TextEditor;
EOF

# Shortcut für LocalSend
cat <<EOF > "$DESKTOP_DIR/LocalSend.desktop"
[Desktop Entry]
Name=LocalSend
Comment=Send files over local network
Exec=localsend
Icon=localsend
Terminal=false
Type=Application
Categories=Network;Utility;
EOF

# Shortcut für Brave
cat <<EOF > "$DESKTOP_DIR/Brave.desktop"
[Desktop Entry]
Name=Brave
Comment=Web Browser
Exec=brave-browser
Icon=brave-browser
Terminal=false
Type=Application
Categories=Network;WebBrowser;
EOF

# Machen die Shortcuts ausführbar
chmod +x "$DESKTOP_DIR/Zed.desktop"
chmod +x "$DESKTOP_DIR/LocalSend.desktop"
chmod +x "$DESKTOP_DIR/Brave.desktop"

echo ":) Setup completed! Desktop-Shortcuts created for Zed, LocalSend and Brave."
