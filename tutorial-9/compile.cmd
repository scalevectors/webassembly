@echo off

if NOT exist build (
    mkdir build
)

emcc app.c -o build/app.js -s EXTRA_EXPORTED_RUNTIME_METHODS="['callMain']"
@echo on