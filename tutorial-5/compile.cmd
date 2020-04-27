@echo off

if NOT exist build (
    mkdir build
)

emcc jsTest.c -o build/jsTest.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['getValue', 'setValue', 'lengthBytesUTF8', 'stringToUTF8']"

@echo on