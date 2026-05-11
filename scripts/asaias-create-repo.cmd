@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0asaias-create-repo.ps1" %*
exit /b %ERRORLEVEL%

