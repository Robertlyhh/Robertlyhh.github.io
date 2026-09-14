$ErrorActionPreference = 'Stop'
npm.cmd run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host 'Portfolio build and validation complete.' -ForegroundColor Green
