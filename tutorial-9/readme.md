Explicilty disable main() from C and execute it later using emscripten exported function callMain

emcc app.c -o build/app.js -s EXTRA_EXPORTED_RUNTIME_METHODS="['callMain']"