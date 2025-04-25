export function compoundInterest(
  amount: number,
  index: number,
  days: number
): number {
  //1.00016405
  const interest = amount * Math.pow(1 + index, days) - amount;
  return parseFloat(interest.toFixed(2));
}
