export default class Contagem {
  static contar(dados, n) {
    // Verifica se o array existe e tem pelo menos um elemento
    if (!dados || dados.length === 0) return 0;
    
    const primeiroDado = dados[0];
    
    // Como não sabemos se o 'N' é maior ou menor que o primeiro dado,
    // pegamos o menor e o maior valor para definir o intervalo corretamente
    const min = Math.min(primeiroDado, n);
    const max = Math.max(primeiroDado, n);
    
    let contador = 0;
    
    for (let i = 0; i < dados.length; i++) {
      const valor = dados[i];
   
      if (Number.isInteger(valor) && valor >= min && valor <= max) {
        contador++;
      }
    }
    
    return contador;
  }
}