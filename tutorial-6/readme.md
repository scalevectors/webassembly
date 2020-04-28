1. Create a wasm module without emscripten glue code and loaded in html

https://github.com/emscripten-core/emscripten/wiki/WebAssembly-Standalone
https://developers.google.com/web/updates/2018/04/loading-wasm
https://v8.dev/blog/emscripten-standalone-wasm

Important note
To remove runtime WASI use emcc optimizer to remove all runtime elements that are not used.
-Os is needed to make the optimizer work at full power. You can also use -Oz or -O3 (but not -O2 or lower).