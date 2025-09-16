/*
  Um laptop, se forem compradas menos de cinco unidades, custa R$ 1.200,00. 
  Se forem adquiridas cinco ou mais unidades, o produto custará R$ 1.050,00. 
  Escreva uma função que receba por parâmetro o número de laptops comprados, 
  calculando o custo total da compra.
*/

function calcularCustoLaptops(unidades) {
  let precoPorUnidade;

  if (unidades < 5) {
    precoPorUnidade = 1200;
  } else {
    precoPorUnidade = 1050;
  }

  // 1. Calcula o custo total e guarda em uma variável
  const custoTotal = unidades * precoPorUnidade;

  // 2. Cria uma mensagem clara e formatada para o usuário
  // O método .toFixed(2) garante que o valor sempre terá duas casas decimais, como em R$ 1200.00
  const mensagem = `O custo total para ${unidades} unidades é de R$ ${custoTotal.toFixed(2)}.`;

  // 3. Exibe a mensagem final
  alert(mensagem);
}

// --- Como testar as funções ---
// calcularCustoLaptops(3);  // Vai mostrar o alerta para 3 unidades
// calcularCustoLaptops(5);  // Vai mostrar o alerta para 5 unidades