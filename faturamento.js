const faturamentoJSON = `{
  "dias": [
      {"dia": 1, "valor": 22174.1664},
      {"dia": 2, "valor": 24537.6698},
      {"dia": 3, "valor": 26139.6134},
      {"dia": 4, "valor": 0},
      {"dia": 5, "valor": 0},
      {"dia": 6, "valor": 26742.6612},
      {"dia": 7, "valor": 0},
      {"dia": 8, "valor": 42889.2258},
      {"dia": 9, "valor": 46251.174},
      {"dia": 10, "valor": 11191.4722}
  ]
}`;

const faturamento = JSON.parse(faturamentoJSON).dias;


const diasComFaturamento = faturamento.filter(d => d.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

const mediaMensal = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0) / diasComFaturamento.length;
const diasAcimaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias acima da média mensal:", diasAcimaMedia);
