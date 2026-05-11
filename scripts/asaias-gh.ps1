param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]] $GhArgs
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$localRoot = Join-Path $repoRoot ".asaias-local"
$ghConfig = Join-Path $localRoot "gh"

New-Item -ItemType Directory -Force -Path $ghConfig | Out-Null

$env:GH_CONFIG_DIR = $ghConfig

& gh @GhArgs
exit $LASTEXITCODE

