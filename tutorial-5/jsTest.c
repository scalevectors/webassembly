#include <emscripten.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

EM_JS(void, call_JS_Add, (int i, int j), {
  console.log('EM_JS - Add: ' + (i + j));
});

EM_JS(void, call_JS_Print_str, (const char* str, int len), {
  console.log('EM_JS - String: ' + UTF8ToString(str, len));
});

void EMSCRIPTEN_KEEPALIVE callExternalJSMacro(int i, int j) {
	call_JS_Add(i, j);
}

void EMSCRIPTEN_KEEPALIVE callExternalJSMacroWithParameters(const char* str, int len) {
    call_JS_Print_str(str, len);
}

void EMSCRIPTEN_KEEPALIVE callInternalJSMacro() {
    EM_ASM(
		console.log('EM_ASM - Hello world!');
	);
}

void EMSCRIPTEN_KEEPALIVE callInternalJSMacroWithParameters(int i, int j) {
	EM_ASM({
	console.log('EM_ASM - Add: ' + ($0 + $1));
	}, i, j);
}

