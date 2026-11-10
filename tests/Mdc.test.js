import Mdc from '../src/Mdc.js';

describe('Mdc', () => {
  test('MDC de 48 e 18 deve ser 6', () => {
    expect(Mdc.calcular(48, 18)).toBe(6);
  });

  test('MDC de 1 e qualquer numero deve ser 1', () => {
    expect(Mdc.calcular(1, 10)).toBe(1);
  });
});