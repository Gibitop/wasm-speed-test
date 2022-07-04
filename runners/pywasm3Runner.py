import wasm3
from time import time
from base64 import b64encode

with open('./build/assemblyScript.wasm', 'rb') as file:
    WASM = file.read()

env = wasm3.Environment()
rt = env.new_runtime(1024)
mod = env.parse_module(WASM)
rt.load(mod)

calculate_pi = rt.find_function('calculatePi')

start_time = time()
pi = calculate_pi(4294967293)
end_time = time()

print(
    'Calculated PI =',
    pi,
    '| Took:',
    f'{(end_time - start_time) * 1000}ms',
)
