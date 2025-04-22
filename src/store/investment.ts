import { defineStore } from 'pinia';

export enum PeriodTypes {
  Days = 'dias',
  Months = 'meses',
  Years = 'anos',
}

export const useInvestmentStore = defineStore('investiment', {
  state: () => {
    return {
      amount: 1000,
      period: 360,
      poupanca: 0,
      periodType: PeriodTypes.Days,
    };
  },
  actions: {
    setAmount(amount: number) {
      this.amount = amount;
    },

    setPeriod(period: number) {
      this.period = period;
    },

    setPeriodType(periodType: PeriodTypes) {
      this.periodType = periodType;
    },

    initializeStore() {
      this.loadIndexes();
    },

    loadIndexes() {
      this.poupanca = 0.5;
    },
  },
});
