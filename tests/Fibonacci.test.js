import Fibonacci from '../src/Fibonacci.js';

describe('Fibonacci', () => {
  test('os 6 primeiros termos devem ser os corretos', () => {
    expect(Fibonacci.gerar(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test('gerar(1) deve retornar [0]', () => {
    expect(Fibonacci.gerar(1)).toEqual([0]);
  });
});