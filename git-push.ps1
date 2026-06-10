
$ErrorActionPreference = "Stop"
Set-Location "E:\app\esim"
$env:GIT_PAGER = "cat"
Write-Host "Checking git status..."
git --no-pager status
Write-Host "Adding files..."
git add --all
Write-Host "Committing changes..."
git commit -m "Fix: Restore project structure and all pages"
Write-Host "Pushing to origin main..."
git push origin main
Write-Host "Done!"
