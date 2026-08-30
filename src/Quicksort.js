export default class Quicksort {
  static ordenar(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    // Juntando tudo de forma recursiva
    return [...this.ordenar(left), ...middle, ...this.ordenar(right)];
  }
}