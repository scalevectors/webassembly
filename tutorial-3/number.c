#include <emscripten.h>
#include <stdio.h>


int g_int = 42;
float g_float = 3.14;

///////////////////////////////////////
// Int functions
///////////////////////////////////////
void EMSCRIPTEN_KEEPALIVE printInteger() {
    printf("Internal g_int value (C Func): %d\n", g_int);
}

int* EMSCRIPTEN_KEEPALIVE getIntPtr() {
	return &g_int;
}

void EMSCRIPTEN_KEEPALIVE queryIntPtr(int *val) {
	*val = g_int;
}

void EMSCRIPTEN_KEEPALIVE setIntPtr(int *val) {
	g_int = *val;
    printf("set g_int new value via setIntPtr (C Func): %d\n", g_int);
}

///////////////////////////////////////
// Float functions
///////////////////////////////////////

float* EMSCRIPTEN_KEEPALIVE getFloatPtr() {
	return &g_float;
}

void EMSCRIPTEN_KEEPALIVE setFloatPtr(float *val) {
	g_float = *val;
    printf("set g_float new value via setFloatPtr (C Func): %.3f\n", g_float);
}