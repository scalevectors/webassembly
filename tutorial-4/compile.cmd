@echo off

if NOT exist build (
    mkdir build
)

emcc struct.c -o build/struct.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['getValue', 'setValue']"

@echo on