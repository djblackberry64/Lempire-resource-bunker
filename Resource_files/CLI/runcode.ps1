# ----------------------------
# ZED RUNNER MASTER SCRIPT
# Top 20 popular programming languages
# Supports .class files for Java
# ----------------------------

param(
    [string]$full_path
)

if (-not $full_path) {
    $full_path = Read-Host "Enter the full path of your file"
}

$dir = Split-Path $full_path
$filename = Split-Path $full_path -Leaf

# Supported languages and commands
$commands = @{
    py = "python"
    js = "node"
    java = "javac"
    c = "gcc"
    cpp = "g++"
    rb = "ruby"
    go = "go run"
    ts = "ts-node"
    php = "php"
    rs = "rustc"
    kt = "kotlinc"
    cs = "csc"
    swift = "swift"
    m = "clang"
    scala = "scala"
    hs = "runhaskell"
    lua = "lua"
    sh = "bash"
    r = "Rscript"
    dart = "dart run"
}

# ------------- Mode Selection -------------
Write-Host "Choose execution mode:"
Write-Host "1) Automatic (detect by file extension)"
Write-Host "2) Manual selection"
$mode = Read-Host "Enter 1 or 2"

function Run-Command {
    param([string]$lang, [string]$file)

    $fileDir = Split-Path $file
    $fileName = Split-Path $file -Leaf

    Push-Location $fileDir

    if (Get-Command $commands[$lang] -ErrorAction SilentlyContinue) {
        switch ($lang) {
            "java" {
                $extension = [System.IO.Path]::GetExtension($fileName).TrimStart(".")
                if ($extension -eq "class") {
                    & java $fileName.Substring(0,$fileName.LastIndexOf("."))
                } else {
                    & javac $fileName
                    if ($LASTEXITCODE -eq 0) {
                        & java $fileName.Substring(0,$fileName.LastIndexOf("."))
                    }
                }
            }
            "rs" {
                & rustc $fileName
                if ($LASTEXITCODE -eq 0) { & .\($fileName.Substring(0,$fileName.LastIndexOf("."))) }
            }
            "cs" {
                & csc $fileName
                if ($LASTEXITCODE -eq 0) { & .\($fileName.Substring(0,$fileName.LastIndexOf(".")) + ".exe") }
            }
            Default {
                & $commands[$lang] $fileName
            }
        }
    } else {
        Write-Host "Please install the necessary packages for this language: $lang"
    }

    Pop-Location
}

# ------------- Automatic -------------
if ($mode -eq "1") {
    $extension = [System.IO.Path]::GetExtension($filename).TrimStart(".").ToLower()
    if ($commands.ContainsKey($extension)) {
        Run-Command $extension $full_path
    } else {
        Write-Host "This language is currently not supported or your file ending is incorrect."
    }
}

# ------------- Manual -------------
if ($mode -eq "2") {
    Write-Host "Available languages:"
    $i = 1
    $options = @{}
    foreach ($lang in $commands.Keys) {
        $options[$i] = $lang
        Write-Host "$i) $lang"
        $i++
    }

    $choice = Read-Host "Choose a language by number"
    if ($options.ContainsKey([int]$choice)) {
        Run-Command $options[[int]$choice] $full_path
    } else {
        Write-Host "Invalid selection."
    }
}
