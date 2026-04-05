#!/bin/bash

# ---------------------------
# 1 System Update
# ---------------------------
sudo apt update && sudo apt upgrade -y
echo "Update complete!"

# ---------------------------
# 2 Firefox removal
# ---------------------------
sudo apt purge -y firefox
sudo apt autoremove -y
echo "Firefox removed!"

# ---------------------------
# 3 Programming Installations & Package Managers
# ---------------------------

sudo apt install default-jdk \
python3 \
python3-pip \
git \
curl \
wget -y
echo "Developer tools & package managers installed!"

# ---------------------------
# 4 Tools
# ---------------------------
curl -f https://zed.dev/install.sh | sh
curl -fsS https://dl.brave.com/install.sh | sh
sudo snap install localsend
echo "Standard apps installed!"

# ---------------------------
# 5 Brave as Standard Browser
# ---------------------------
xdg-settings set default-web-browser brave-browser.desktop
sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /usr/bin/brave-browser 100
sudo update-alternatives --set x-www-browser /usr/bin/brave-browser
echo "Brave set as default!"


echo ":) Setup completed! Desktop-Shortcuts created for Zed, LocalSend and Brave."
