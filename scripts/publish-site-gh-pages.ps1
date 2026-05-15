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
  if (-not (Test-Path -LiteralPath $Path)) {
    return
  }

  $resolved = (Resolve-Path -LiteralPath $Path).Path
  if (-not $resolved.StartsWith($repoRoot)) {
    throw "Refusing to remove path outside repo: $resolved"
  }

  Remove-Item -LiteralPath $resolved -Recurse -Force
}

try {
  Remove-SafePath $bundleDir
  New-Item -ItemType Directory -Path $bundleDir | Out-Null

  Get-ChildItem -LiteralPath (Join-Path $repoRoot $SourceDir) -Force |
    Copy-Item -Destination $bundleDir -Recurse -Force

  $bundlePresentations = Join-Path $bundleDir "presentations"
  New-Item -ItemType Directory -Path $bundlePresentations -Force | Out-Null

  $presentationsPath = Join-Path $repoRoot $PresentationsDir
  if (Test-Path -LiteralPath $presentationsPath) {
    Get-ChildItem -LiteralPath $presentationsPath -Filter "*.pptx" |
      Copy-Item -Destination $bundlePresentations -Force
  }

  $zipSourcePath = Join-Path $repoRoot $ZipPath
  if (Test-Path -LiteralPath $zipSourcePath) {
    $zipDestinationPath = Join-Path $bundlePresentations "00-faculty-presentations.zip"
    Copy-Item -LiteralPath $zipSourcePath -Destination $zipDestinationPath -Force
  }

  if (Test-Path -LiteralPath $worktreeDir) {
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
} finally {
  if (Test-Path -LiteralPath $worktreeDir) {
    git worktree remove --force "$worktreeDir"
  }
  Remove-SafePath $bundleDir
}
