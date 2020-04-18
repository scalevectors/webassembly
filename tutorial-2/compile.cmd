@echo off

if NOT exist build (
    mkdir build
)

emcc string.c -o build/string.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['lengthBytesUTF8', 'stringToUTF8', 'UTF8ToString', 'getValue']"

@echo on