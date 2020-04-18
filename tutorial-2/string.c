#include <emscripten.h>
#include <stdio.h>
#include <string.h>

static char g_str[256] = "Hello, world!";

const char* EMSCRIPTEN_KEEPALIVE getString() {
	return g_str;
}

void EMSCRIPTEN_KEEPALIVE  queryString(char** ppStr) {
	*ppStr = g_str;
}

void EMSCRIPTEN_KEEPALIVE  copyString(char* pstr) {
	strcpy(pstr, g_str);
}

void EMSCRIPTEN_KEEPALIVE  setString(char* pstr) {
	strcpy(g_str, pstr);
    printf("setString (C Func): %s\n", g_str);
}

int EMSCRIPTEN_KEEPALIVE  compareString(char* pstr, int len) {
	return strncmp(pstr, g_str, len);
}

void EMSCRIPTEN_KEEPALIVE printCString() {
    printf("printCString (C Func): %s\n", g_str);
}

