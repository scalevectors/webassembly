#include <emscripten.h>
#include <stdio.h>


void EMSCRIPTEN_KEEPALIVE print() {
    printf("hello from C\n");
}

void EMSCRIPTEN_KEEPALIVE printWithParameters(char* pstr) {
    printf("printed from C with parameters: (%s)\n", pstr);
}
