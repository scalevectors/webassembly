@echo off

if NOT exist build (
    mkdir build
)

emcc compute.c -o build/compute.wasm -s WASM=1 -s SIDE_MODULE=1 -Os  

@echo on