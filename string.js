function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }
  return invertida;
}

let texto = "JavaScript";
console.log(inverterString(texto)); 
