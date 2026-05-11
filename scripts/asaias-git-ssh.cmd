@echo off
for %%I in ("%~dp0..") do set "ASAIAS_ROOT=%%~fI"
"%SystemRoot%\System32\OpenSSH\ssh.exe" -F "%ASAIAS_ROOT%\.asaias-local\ssh\config" %*
exit /b %ERRORLEVEL%

