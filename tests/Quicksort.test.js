import Quicksort from '../src/Quicksort.js';

describe('Quicksort', () => {
  test('deve ordenar um array desordenado', () => {
    expect(Quicksort.ordenar([10, 5, 2, 3, 7])).toEqual([2, 3, 5, 7, 10]);
  });

  test('array ja ordenado deve permanecer igual', () => {
    expect(Quicksort.ordenar([1, 2, 3])).toEqual([1, 2, 3]);
  });
});