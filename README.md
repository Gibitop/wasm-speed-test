# WASM speed test

A place to compare `JS` vs `WASM` vs `native` speeds.

## Method

The benchmark is calculating PI with a [Leibniz formula](https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80)

The algorithm is implemented in
- Plain JavaScript
- Plain C
- AssemblyScript


## How code is executed

You can find the algorithm implementations in the `implementations` directory \
You can find executing scripts in then `runners` directory


### Plain JavaScript

Not compiled AOT (obviously) \
Executed by `node v16.13.2` \
Loaded by a `require` function \
Measured with `performance.now()`


### Plain C

Compiled with the clang (cc) compiler
> Apple clang version 13.1.6 (clang-1316.0.21.2.5)
```bash
cc implementations/plainC.c -O2 -o build/plainC
```
Executed natively
```bash
./runners/plainC
```
Measured with `clock()` function from `time.h`


### AssemblyScript

Compiled with `asc v0.20.13`
```bash
node_modules/.bin/asc implementations/assemblyScript.ts --target release
```

#### Node

Executed by `node v16.13.2` \
Loaded with `WebAssembly.instantiate` \
Measured with `performance.now()`

#### WASM3 CLI

Executed by `wasm3 v0.5.0` \
Loaded with `--func` argument \
Measured with the `time` command

#### PyWasm3

Executed by `python 3.10.4` \
Loaded with `pywasm3 v0.5.0` \
Measured with `time.time()` function


## Run the benchmark

### Install dependencies

- `assemblyscript` for all AssemblyScript benchmarks
    ```bash
    npm install
    ```
- `wasm3` for AssemblyScript -> WASM -> WASM3 CLI benchmark
    ```bash
    # macOS: 
    brew install wabt
    ```
- `pywasm3` for AssemblyScript -> WASM -> PyWASM3 benchmark
   ```bash
   pip3 install pywasm3
   ```


### Build C and AssemblyScript

#### Build all
```bash
npm run build
```

#### AssemblyScript only

```bash
npm run build:assembly-script
```

#### C only

```bash
npm run build:c
```


### Actually run benchmarks

#### Run all
```bash
npm run start
```

#### Plain JavaScript only
```bash
npm run start:js
```

#### Plain C only
```bash
npm run start:c
```

#### WASM on node only
```bash
npm run start:wasm-node
```

#### WASM3 CLI only
```bash
npm run start:wasm3-cli
```

#### PyWASM3 only
```bash
npm run start:pywasm3
```


## Results

Measured on a MacBook Air M1 16Gb RAM

| Method       | Time, ms |
| ------------ | -------- |
| Plain JS     | 4861     |
| Plain C      | 4119     |
| WASM on node | 4035     |
| wasm3 CLI    | 39327    |
| pywasm3      | 39652    |
