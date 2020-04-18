@echo off

if NOT exist build (
    mkdir build
)

emcc number.c -o build/number.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['getValue', 'setValue']"

@echo on