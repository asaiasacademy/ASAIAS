param(
  [string] $SitemapPath = "site/sitemap.xml",
  [string] $KeyFilePath = "site/5db59f5c-e733-4f1e-a4ea-8351369a7b34.txt",
  [string] $SiteHost = "asaiasacademy.github.io"
)

$ErrorActionPreference = "Stop"

[xml] $sitemap = Get-Content -Raw $SitemapPath
$key = (Get-Content -Raw $KeyFilePath).Trim()
$urls = @($sitemap.urlset.url | ForEach-Object { $_.loc })

$body = @{
  host = $SiteHost
  key = $key
  urlList = $urls
} | ConvertTo-Json -Depth 4

$response = Invoke-WebRequest `
  -Uri "https://api.indexnow.org/indexnow" `
  -Method Post `
  -ContentType "application/json; charset=utf-8" `
  -Body $body `
  -UseBasicParsing `
  -TimeoutSec 60

Write-Output "IndexNow status: $($response.StatusCode)"
