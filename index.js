
import Primo from './src/Primo.js';
import Somatorio from './src/Somatorio.js';
import Fibonacci from './src/Fibonacci.js';
import Mdc from './src/Mdc.js';
import Quicksort from './src/Quicksort.js';
import Contagem from './src/Contagem.js';

console.log("--- 1. Número Primo ---");
console.log("7 é primo?", Primo.verificar(7));
console.log("10 é primo?", Primo.verificar(10));

console.log("\n--- 2. Somatório ---");
console.log("Soma de [1, 2, 3, 4, 5]:", Somatorio.calcular([1, 2, 3, 4, 5]));

console.log("\n--- 3. Fibonacci ---");
console.log("Os 6 primeiros termos:", Fibonacci.gerar(6));

console.log("\n--- 4. MDC ---");
console.log("MDC de 48 e 18:", Mdc.calcular(48, 18));

console.log("\n--- 5. Quicksort ---");
const desordenado = [10, 5, 2, 3, 7];
console.log("Array original:", desordenado);
console.log("Array ordenado:", Quicksort.ordenar(desordenado));

console.log("\n--- 6. Contagem ---");
const dados = [5, 8, 12, 18, 20];
console.log("Dados:", dados, "| N = 15");
console.log("Valores entre o 1º dado (5) e N (15):", Contagem.contar(dados, 15));