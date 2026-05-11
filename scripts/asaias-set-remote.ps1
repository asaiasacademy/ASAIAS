param(
  [string] $Name = "ASAIAS"
)

$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "asaias-owner.ps1")

$owner = $script:AsaiasGitHubOwner
$url = "git@github-asaias-local:$owner/$Name.git"

$existing = git remote
if ($existing -contains "origin") {
  git remote set-url origin $url
} else {
  git remote add origin $url
}

Write-Host "origin -> $url"
git remote -v
