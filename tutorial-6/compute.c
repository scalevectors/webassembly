#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE add(int i, int j) {
    return i + j;
}

int EMSCRIPTEN_KEEPALIVE substract(int i, int j) {
    return i - j;
}
