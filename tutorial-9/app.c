#include <stdio.h>
#include <stdlib.h>

int add(int i, int j) {
    return i + j;
}

int main(int argc, char *argv[])
{
    printf("result: %d \n", add(atoi(argv[1]),atoi(argv[2])));

return 0;
}