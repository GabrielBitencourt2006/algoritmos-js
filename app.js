import Primo from './src/Primo.js';
import Somatorio from './src/Somatorio.js';
import Fibonacci from './src/Fibonacci.js';
import Mdc from './src/Mdc.js';
import Quicksort from './src/Quicksort.js';
import Contagem from './src/Contagem.js';

const seletor = document.getElementById('escolhaAlgoritmo');
const input = document.getElementById('inputDados');
const btn = document.getElementById('btnExecutar');
const resultadoDiv = document.getElementById('resultado');

btn.addEventListener('click', () => {
    const escolha = seletor.value;
    const valorDigitado = input.value.trim();

    if (!valorDigitado) {
        resultadoDiv.innerText = "Por favor, digite algum valor!";
        return;
    }

    try {
        let resultado = "";
        const parseArray = (str) => str.split(',').map(num => Number(num.trim()));
        const parseNum = (str) => Number(str);
        const validarInteiros = (valores) => {
            if (valores.some(v => !Number.isInteger(v))) {
                throw new Error("Digite apenas numeros inteiros!");
            }
        };

        switch (escolha) {
            case 'primo':
                const numPrimo = parseNum(valorDigitado);
                validarInteiros([numPrimo]);
                const ehPrimo = Primo.verificar(numPrimo);
                resultado = `${numPrimo} e primo? ${ehPrimo ? 'Sim' : 'Nao'}`;
                break;
            case 'somatorio':
                const arrSoma = parseArray(valorDigitado);
                if (arrSoma.some(v => Number.isNaN(v))) {
                    throw new Error("Digite apenas numeros separados por virgula!");
                }
                resultado = `Soma: ${Somatorio.calcular(arrSoma)}`;
                break;
            case 'fibonacci':
                const numFibo = parseNum(valorDigitado);
                validarInteiros([numFibo]);
                resultado = `Termos: ${Fibonacci.gerar(numFibo).join(', ')}`;
                break;
            case 'mdc':
                const arrMdc = parseArray(valorDigitado);
                if (arrMdc.length !== 2) {
                    throw new Error("Digite dois numeros separados por virgula (ex: 48,18)!");
                }
                validarInteiros(arrMdc);
                resultado = `MDC: ${Mdc.calcular(arrMdc[0], arrMdc[1])}`;
                break;
            case 'quicksort':
                const arrQuick = parseArray(valorDigitado);
                if (arrQuick.some(v => Number.isNaN(v))) {
                    throw new Error("Digite apenas numeros separados por virgula!");
                }
                const ordenado = Quicksort.ordenar(arrQuick);
                resultado = `Ordenado: [${ordenado.join(', ')}]`;
                break;
            case 'contagem':
                const nContagem = parseNum(valorDigitado);
                validarInteiros([nContagem]);
                const dadosBase = [5, 8, 12, 18, 20];
                resultado = `Quantidade entre ${dadosBase[0]} e ${nContagem}: ${Contagem.contar(dadosBase, nContagem)}`;
                break;
        }
        resultadoDiv.innerText = resultado;
    } catch (error) {
        resultadoDiv.innerText = error.message || "Erro ao processar os dados.";
    }
});