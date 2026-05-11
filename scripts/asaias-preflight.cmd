@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0asaias-preflight.ps1" %*
exit /b %ERRORLEVEL%

