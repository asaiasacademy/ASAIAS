param(
  [string] $SourceDir = "site",
  [string] $PresentationsDir = "presentations/out",
  [string] $ZipPath = "faculty-presentations.zip",
  [string] $PublishBranch = "gh-pages"
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path ".").Path
$bundleDir = Join-Path $repoRoot ".codex-publish-bundle"
$worktreeDir = Join-Path $repoRoot ".codex-gh-pages"

function Remove-SafePath([string] $Path) {
  if (-not (Test-Path $Path)) {
    return
  }

  $resolved = (Resolve-Path $Path).Path
  if (-not $resolved.StartsWith($repoRoot)) {
    throw "Refusing to remove path outside repo: $resolved"
  }

  Remove-Item -LiteralPath $resolved -Recurse -Force
}

Remove-SafePath $bundleDir
New-Item -ItemType Directory -Path $bundleDir | Out-Null

Get-ChildItem -LiteralPath (Join-Path $repoRoot $SourceDir) -Force |
  Copy-Item -Destination $bundleDir -Recurse -Force

$bundlePresentations = Join-Path $bundleDir "presentations"
New-Item -ItemType Directory -Path $bundlePresentations -Force | Out-Null

if (Test-Path (Join-Path $repoRoot $PresentationsDir)) {
  Get-ChildItem -LiteralPath (Join-Path $repoRoot $PresentationsDir) -Filter "*.pptx" |
    Copy-Item -Destination $bundlePresentations -Force
}

if (Test-Path (Join-Path $repoRoot $ZipPath)) {
  Copy-Item -LiteralPath (Join-Path $repoRoot $ZipPath) `
    -Destination (Join-Path $bundlePresentations "00-Презентации-факультетов-Академии.zip") `
    -Force
}

if (Test-Path $worktreeDir) {
  git worktree remove --force "$worktreeDir"
}

git worktree add --detach "$worktreeDir" "origin/$PublishBranch"
git -C "$worktreeDir" rm -r --ignore-unmatch .

Get-ChildItem -LiteralPath $bundleDir -Force |
  Copy-Item -Destination $worktreeDir -Recurse -Force

git -C "$worktreeDir" add -A

$hasChanges = git -C "$worktreeDir" status --porcelain
if ($hasChanges) {
  $stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  git -C "$worktreeDir" commit -m "Publish site $stamp"
  git -C "$worktreeDir" push origin "HEAD:$PublishBranch"
} else {
  Write-Output "No publishable changes detected."
}
