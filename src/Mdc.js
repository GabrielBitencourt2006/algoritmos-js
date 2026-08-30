export default class Mdc {
  static calcular(a, b) {
    
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}