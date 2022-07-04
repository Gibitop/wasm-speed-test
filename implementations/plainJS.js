function calculatePi(rounds) {
    let x = 1.0
    let pi = 1.0

    for (let i = 2; i < rounds + 2; i++) {
        x *= -1
        pi += x / (2 * i - 1)
    }

    pi *= 4
    return pi
}

const start = performance.now()
const pi = calculatePi(4294967293)
const end = performance.now()

console.log(
    'Calculated PI =',
    pi,
    '| Took:',
    `${end - start}ms`,
)
