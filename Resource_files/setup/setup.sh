#!/bin/bash

# ---------------------------
# 1 System Update & Tools
# ---------------------------
sudo apt update && sudo apt upgrade -y
sudo apt install -y zed localsend brave-browser

# ---------------------------
# 2 Firefox entfernen
# ---------------------------
sudo apt purge -y firefox
sudo apt autoremove -y

# ---------------------------
# 3 Brave als Standardbrowser
# ---------------------------
xdg-settings set default-web-browser brave-browser.desktop
sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /usr/bin/brave-browser 100
sudo update-alternatives --set x-www-browser /usr/bin/brave-browser

# ---------------------------
# 4 Desktop Shortcuts erstellen
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

echo ":) Setup abgeschlossen! Desktop-Shortcuts für Zed, LocalSend und Brave erstellt."
