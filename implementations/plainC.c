#include <stdio.h>
#include <stdint.h>
#include <time.h>
#pragma float64


double calculatePi(uint64_t rounds)
{
    double x = 1.0;
    double pi = 1.0;

    for (uint64_t i = 2; i < rounds + 2; i++)
    {
        x *= -1;
        pi += x / (2 * i - 1);
    }

    pi *= 4;
    return pi;
}

int main()
{
    clock_t start, stop;

    start = clock();
    double pi = calculatePi(4294967293);
    stop = clock();

    double delta_ms = (double)(stop - start) / CLOCKS_PER_SEC * 1000;

    printf(
        "Calculated PI = %lf | Took: %lfms\n",
        pi,
        delta_ms);

    return 0;
}
