#include <emscripten.h>
#include <stdio.h>
#include <stdlib.h>


typedef struct _WA_STRUCT {
	int a;
	double b;
}WA_STRUCT;

void EMSCRIPTEN_KEEPALIVE structCreate(WA_STRUCT **ppStruct) {
    WA_STRUCT   *pStruct = malloc(sizeof(WA_STRUCT));
    pStruct->a = 35;
    pStruct->b = 3.14;

    *ppStruct  = pStruct;
}

void EMSCRIPTEN_KEEPALIVE structDestory(WA_STRUCT *pStruct) {
    free(pStruct);
}

void EMSCRIPTEN_KEEPALIVE structPrint(WA_STRUCT *pStruct) {
    printf("Struct Values {%d, %.3f}\n", pStruct->a, pStruct->b);
}

void EMSCRIPTEN_KEEPALIVE structQuery(WA_STRUCT *pStruct, int *pa, double *pb) {
    *pa = pStruct->a;
    *pb = pStruct->b;
}

void EMSCRIPTEN_KEEPALIVE structSet(WA_STRUCT *pStruct, int a, double b) {
    pStruct->a = a;
    pStruct->b = b;
}
