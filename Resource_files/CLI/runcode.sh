#!/bin/bash

# ----------------------------
# ZED RUNNER MASTER SCRIPT
# Top 20 popular programming languages
# Supports .class files for Java
# ----------------------------

# File path
full_path="$1"

if [ -z "$full_path" ]; then
  read -p "Enter the full path of your file: " full_path
fi

# Absolute path & filename
dir=$(dirname "$full_path")
filename=$(basename "$full_path")

# Supported languages and commands
declare -A commands
commands=(
  [py]="python"
  [js]="node"
  [java]="javac"
  [c]="gcc"
  [cpp]="g++"
  [rb]="ruby"
  [go]="go run"
  [ts]="ts-node"
  [php]="php"
  [rs]="rustc"
  [kt]="kotlinc"
  [cs]="csc"
  [swift]="swift"
  [m]="clang"
  [scala]="scala"
  [hs]="runhaskell"
  [lua]="lua"
  [sh]="bash"
  [r]="Rscript"
  [dart]="dart run"
)

# ------------- Mode Selection -------------
echo "Choose execution mode:"
echo "1) Automatic (detect by file extension)"
echo "2) Manual selection"
read -p "Enter 1 or 2: " mode

run_command() {
  local lang="$1"
  local file="$2"
  local file_dir=$(dirname "$file")
  local file_name=$(basename "$file")

  cd "$file_dir" || exit

  if command -v ${commands[$lang]} >/dev/null 2>&1; then
    case "$lang" in
      java)
        extension="${file_name##*.}"
        if [[ "$extension" == "class" ]]; then
          java "${file_name%.*}"
        else
          javac "$file_name" && java "${file_name%.*}"
        fi
        ;;
      rs)
        rustc "$file_name" && ./$(basename "${file_name%.*}")
        ;;
      cs)
        csc "$file_name" && ./$(basename "${file_name%.*}.exe")
        ;;
      *)
        ${commands[$lang]} "$file_name"
        ;;
    esac
  else
    echo "Please install the necessary packages for this language: $lang"
  fi
}

# ------------- Automatic -------------
if [ "$mode" = "1" ]; then
  extension="${filename##*.}"
  extension="${extension,,}"  # lowercase

  if [[ -v commands[$extension] ]]; then
    run_command "$extension" "$full_path"
  else
    echo "This language is currently not supported or your file ending is incorrect."
  fi
fi

# ------------- Manual -------------
if [ "$mode" = "2" ]; then
  echo "Available languages:"
  i=1
  declare -A options
  for lang in "${!commands[@]}"; do
    options[$i]=$lang
    echo "$i) $lang"
    ((i++))
  done

  read -p "Choose a language by number: " choice
  if [[ -v options[$choice] ]]; then
    run_command "${options[$choice]}" "$full_path"
  else
    echo "Invalid selection."
  fi
fi
