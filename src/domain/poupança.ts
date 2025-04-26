import * as finance from './finance';
export function getPoupancaResult(
  amount: number,
  index: number,
  periods: number
): { interestAmount: number } {
  const interestAmount = finance.compoundInterestPoupanca(
    amount,
    getIndexPoupanca(index),
    calculateFullMonthsDays(periods)
  );
  return { interestAmount };
}

// Função para calcular o número de dias completos (múltiplos de 30 dias)
export function calculateFullMonthsDays(days: number): number {
  const daysInMonth = 30;
  return days < daysInMonth ? 0 : Math.floor(days / daysInMonth) * daysInMonth;
}

// Função para calcular a taxa anual de poupança com base na taxa SELIC
export function calculateAnnualSavingsRate(selic: number) {
  // Quando a SELIC é maior que 8.5% ao ano, a poupança rende 0.5% ao mês (6.17% ao ano)
  if (selic > 8.5) return 6.17;
  // Quando a SELIC é menor ou igual a 8.5% ao ano, a poupança rende 70% da SELIC ao ano
  return selic * 0.7;
}

// Função para converter a taxa anual da poupança em taxa diária
function getIndexPoupanca(annualRate: number): number {
  // Transforma a taxa anual em uma taxa diária
  return Math.pow(annualRate / 100 + 1, 1 / 360) - 1;
}
