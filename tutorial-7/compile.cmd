@echo off

if NOT exist build (
    mkdir build
)

emcc compute.c  -s WASM=1 -s SIDE_MODULE=1 -Os  -s BINARYEN_ASYNC_COMPILATION=o -o build/compute.wasm
@echo on