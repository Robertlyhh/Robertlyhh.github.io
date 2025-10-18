npm run clean
npm run build
Copy-Item source\index.html -Destination public\index.html
Write-Host "Build complete! The redirect page is ready." -ForegroundColor Green
