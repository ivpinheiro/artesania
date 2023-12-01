@echo off
setlocal enabledelayedexpansion

set "counter=1"

for %%F in (artist-id-*.svg) do (
    set "extension=%%~xF"
    ren "%%~F" "artist-id-!counter!!extension!"
    set /a "counter+=0"
)

echo Renomeação concluída.
pause
