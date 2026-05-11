@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0asaias-set-remote.ps1" %*
exit /b %ERRORLEVEL%

