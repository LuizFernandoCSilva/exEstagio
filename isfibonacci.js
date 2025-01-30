function isFibonacci(num) {
  let a = 0, b = 1, temp;
  
  while (b < num) {
      temp = a + b;
      a = b;
      b = temp;
  }
  
  return b === num || num === 0;
}

let numero = 21; 
console.log(isFibonacci(numero) ? "Pertence à sequência de Fibonacci" : "Não pertence à sequência de Fibonacci");
