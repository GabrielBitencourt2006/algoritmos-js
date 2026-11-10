import Primo from '../src/Primo.js';

describe('Primo', () => {
  test('7 deve ser identificado como primo', () => {
    expect(Primo.verificar(7)).toBe(true);
  });

  test('10 nao deve ser identificado como primo', () => {
    expect(Primo.verificar(10)).toBe(false);
  });
});