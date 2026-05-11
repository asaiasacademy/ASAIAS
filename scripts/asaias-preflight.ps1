$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$ghWrapper = Join-Path $PSScriptRoot "asaias-gh.cmd"

Write-Host "Git remotes:"
git remote -v
Write-Host ""

Write-Host "Local git identity:"
Write-Host "  user.name  = $(git config --local --get user.name)"
Write-Host "  user.email = $(git config --local --get user.email)"
Write-Host "  sshCommand = $(git config --local --get core.sshCommand)"
Write-Host ""

Write-Host "ASAIAS-local GitHub auth:"
& $ghWrapper auth status
Write-Host ""

$sshConfig = Join-Path $repoRoot ".asaias-local\ssh\config"
if (Test-Path $sshConfig) {
  Write-Host "SSH auth test:"
  ssh -F $sshConfig -T git@github-asaias-local
} else {
  Write-Host "SSH config missing. Run scripts\asaias-setup-github.cmd first."
  exit 1
}

