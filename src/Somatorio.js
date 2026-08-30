export default class Somatorio {
  static calcular(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    return soma;
  }
}