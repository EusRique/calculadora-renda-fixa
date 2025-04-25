export function compoundInterest(
  amount: number,
  index: number,
  days: number
): number {
  const interest = amount * Math.pow(1 + index, days) - amount;
  return parseFloat(interest.toFixed(2));
}

export function compoundInterestCDB(
  amount: number,
  index: number,
  days: number
): number {
  const interest = amount * Math.pow(index, days) - amount;
  return parseFloat(interest.toFixed(2));
}

export function getIndexIR(days: number): number {
  const ranges = [
    { maxDays: 180, rate: 22.5 },
    { maxDays: 360, rate: 20 },
    { maxDays: 720, rate: 17.5 },
    { maxDays: Infinity, rate: 15 },
  ];

  return ranges.find((range) => days <= range.maxDays)!.rate;
}

export function getIOFPercentage(days: number): number {
  const iofTable: number[] = [
    96, 93, 90, 86, 83, 80, 76, 73, 70, 66, 63, 60, 56, 53, 50, 46, 43, 40, 36,
    33, 30, 26, 23, 20, 16, 13, 10, 6, 3, 0,
  ];

  if (days <= 0) return 96;

  if (days <= 30) {
    const index: number = days - 1;
    return iofTable[index];
  }

  return 0; // Return 0 for days > 30
}

export function getIOFAmount(
  daysToRedeem: number,
  interestAmount: number
): number {
  const iofPercentage: number = getIOFPercentage(daysToRedeem);
  return interestAmount * (iofPercentage / 100);
}
