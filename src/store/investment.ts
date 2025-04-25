import { loadSelicRate } from '@/application/services/investment-service';
import { calculateAnnualSavingsRate } from '@/domain/poupança';
import { fecthSelic } from '@/infrastructure/api/selic-api';
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
      selic: 0,
      di: 0,
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

    setDi(di: number) {
      this.di = di;
    },

    setSelic(selic: number) {
      this.selic = selic;
    },

    initializeStore() {
      this.fetchSelic();
    },

    async fetchSelic() {
      try {
        const selic = await loadSelicRate();
        this.selic = selic;
        this.di = selic;
        this.poupanca = calculateAnnualSavingsRate(selic);
      } catch (err) {
        console.error('Erro ao carregar Selic:', err);
      }
    },
  },
});
