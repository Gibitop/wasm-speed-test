const fs = require('fs')
const path = require('path')

const main = async () => {
    const wasmBuffer = fs.readFileSync(path.resolve(__dirname, '../build/assemblyScript.wasm'))
    const wasmModule = await WebAssembly.instantiate(wasmBuffer)

    const { calculatePi } = wasmModule.instance.exports
    
    const start = performance.now()
    const pi = calculatePi(4294967293)
    const end = performance.now()

    console.log(
        'Calculated PI =',
        pi,
        '| Took:',
        `${end - start}ms`,
    )
}

main()
