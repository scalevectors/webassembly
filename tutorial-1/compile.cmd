@echo off

if NOT exist build (
    mkdir build
)

emcc printf.c -o build/printf.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['lengthBytesUTF8', 'stringToUTF8']"

@echo on