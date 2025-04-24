import * as finance from './finance';
export function getPoupancaResult(
  amount: number,
  index: number,
  periods: number
): { interestAmount: number } {
  const interestAmount = finance.compoundInterest(
    amount,
    getIndexPoupanca(index),
    calculateFullMonthsDays(periods)
  );

  return { interestAmount };
}

export function calculateFullMonthsDays(days: number): number {
  const daysInMonth = 30;
  return days < daysInMonth ? 0 : Math.floor(days / daysInMonth) * daysInMonth;
}

export function calculateAnnualSavingsRate(selic: number) {
  if (selic > 8.5) return 6; // // 0.5% ao mês * 12
  return selic * 0.7;
}

function getIndexPoupanca(annualRate: number): number {
  const monthlyRate = annualRate / 12; // transforma 6% ao ano em 0.5% ao mês
  const dailyRate = monthlyRate / 100; // transforma 0.5% ao mês em 0.005
  return Math.pow(1 + dailyRate, 1 / 30);

  //return Math.pow(index / 100 + 1, 1 / 30); utilizar essa linha para calcular o index a partir de um valor fixo do store, ex: 0.6
}
