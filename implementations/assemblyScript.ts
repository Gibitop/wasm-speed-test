export function calculatePi (rounds: u32): f64 {
    let x = 1.0
    let pi = 1.0

    for (let i: u32 = 2; i < rounds + 2; i++) {
        x *= -1
        pi += x / (2 * i - 1)
    }

    pi *= 4
    return pi
}
