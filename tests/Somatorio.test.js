import Somatorio from '../src/Somatorio.js';

describe('Somatorio', () => {
  test('soma de [1, 2, 3, 4, 5] deve ser 15', () => {
    expect(Somatorio.calcular([1, 2, 3, 4, 5])).toBe(15);
  });

  test('soma de array vazio deve ser 0', () => {
    expect(Somatorio.calcular([])).toBe(0);
  });
});