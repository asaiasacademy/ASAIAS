@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0asaias-gh.ps1" %*
exit /b %ERRORLEVEL%

