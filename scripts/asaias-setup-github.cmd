@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0asaias-setup-github.ps1" %*
exit /b %ERRORLEVEL%

