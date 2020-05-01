@echo off

if NOT exist build (
    mkdir build
)

start /B emcc addsubstract.c    -s WASM=1 -s SIDE_MODULE=1 -Os  -s  -o build/addsubstract.wasm
start /B emcc multiplydivide.c  -s WASM=1 -s SIDE_MODULE=1 -Os  -s  -o build/multiplydivide.wasm
@echo on