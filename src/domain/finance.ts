export function compoundInterest(
  amount: number,
  index: number,
  days: number
): number {
  const interest = amount * Math.pow(index, days) - amount;
  return parseFloat(interest.toFixed(2));
}
