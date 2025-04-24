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
  if (selic > 8.5) return 0.5; // // 0.5% ao mês * 12
  return selic * 0.7;
}

function getIndexPoupanca(annualRate: number): number {
  return Math.pow(annualRate / 100 + 1, 1 / 30);
}
