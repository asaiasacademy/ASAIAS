param(
  [string] $Name = "ASAIAS",
  [ValidateSet("private", "public", "internal")]
  [string] $Visibility = "private"
)

$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "asaias-owner.ps1")

$owner = $script:AsaiasGitHubOwner
$gh = Join-Path $PSScriptRoot "asaias-gh.cmd"

& $gh auth status
if ($LASTEXITCODE -ne 0) {
  throw "ASAIAS-local GitHub CLI is not authorized. Run scripts\asaias-gh.cmd auth login first."
}

$visibilityFlag = "--$Visibility"
& $gh repo create "$owner/$Name" $visibilityFlag --description "ASAIAS project repository" --disable-wiki
exit $LASTEXITCODE
