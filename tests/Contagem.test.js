import Contagem from '../src/Contagem.js';

describe('Contagem', () => {
  const dados = [5, 8, 12, 18, 20];

  test('deve contar 3 valores entre o primeiro dado (5) e N=15', () => {
    expect(Contagem.contar(dados, 15)).toBe(3);
  });

  test('array vazio deve retornar 0', () => {
    expect(Contagem.contar([], 10)).toBe(0);
  });
});