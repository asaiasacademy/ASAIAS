$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$localRoot = Join-Path $repoRoot ".asaias-local"
$sshDir = Join-Path $localRoot "ssh"
$ghDir = Join-Path $localRoot "gh"
$keyPath = Join-Path $sshDir "id_ed25519_asaias"
$pubPath = "$keyPath.pub"
$sshConfig = Join-Path $sshDir "config"
$knownHosts = Join-Path $sshDir "known_hosts"

New-Item -ItemType Directory -Force -Path $sshDir, $ghDir | Out-Null

if (-not (Test-Path $keyPath)) {
  $quotedKeyPath = '"' + $keyPath + '"'
  cmd.exe /c "ssh-keygen -t ed25519 -C ""ASAIAS project-local GitHub key"" -f $quotedKeyPath -N """"" | Out-Null
}

$identity = ($keyPath -replace "\\", "/")
$known = ($knownHosts -replace "\\", "/")
$connect = "C:/Program Files/Git/mingw64/bin/connect.exe"
$sshConfigLines = @(
  "Host github-asaias-local",
  "  HostName ssh.github.com",
  "  Port 443",
  "  User git",
  "  IdentityFile $identity",
  "  IdentitiesOnly yes",
  "  HostKeyAlias github.com",
  "  StrictHostKeyChecking accept-new",
  "  UserKnownHostsFile $known"
)

if ((Test-Path "C:\Program Files\Git\mingw64\bin\connect.exe") -and (Test-NetConnection 127.0.0.1 -Port 10808 -InformationLevel Quiet)) {
  $sshConfigLines += "  ProxyCommand `"$connect`" -S 127.0.0.1:10808 %h %p"
}

$sshConfigLines | Set-Content -Path $sshConfig -Encoding utf8

$sshWrapper = (Resolve-Path (Join-Path $PSScriptRoot "asaias-git-ssh.cmd")).Path -replace "\\", "/"

git config --local user.name "ASAIAS"
git config --local user.email "asaias@local.invalid"
git config --local core.sshCommand "`"$sshWrapper`""
git config --local ssh.variant ssh

Write-Host "ASAIAS local GitHub gateway is ready."
Write-Host ""
Write-Host "Project-local GH config:"
Write-Host "  $ghDir"
Write-Host ""
Write-Host "Project-local SSH key:"
Write-Host "  $keyPath"
Write-Host ""
Write-Host "Public key to add to the ASAIAS GitHub account/organization if needed:"
Write-Host ""
Get-Content $pubPath
Write-Host ""
Write-Host "Next:"
Write-Host "  scripts\asaias-gh.cmd auth login --hostname github.com --git-protocol ssh --scopes repo,workflow,admin:public_key,project,read:org"
Write-Host "  scripts\asaias-gh.cmd auth status"
