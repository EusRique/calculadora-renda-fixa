<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import InvestmentResult from '../investment-result/investment-result.vue';
import { useInvestmentStore, PeriodTypes } from '@/store/investment';
import { getPoupancaResult } from '@/domain/poupança';
import { getCDBResult } from '@/domain/cdb';
import { getLcxResult } from '@/domain/lcx';

const percentual = ref(0.65);
const percentual1 = ref(0.91);
const investment = useInvestmentStore();

const periodMultiplier = {
  [PeriodTypes.Days]: 1,
  [PeriodTypes.Months]: 365 / 12,
  [PeriodTypes.Years]: 365,
};

const resultPoupanca = computed(() => {
  return getPoupancaResult(
    investment.amount,
    investment.poupanca,
    getDurationInDays()
  );
});

const resultCDB = computed(() => {
  return getCDBResult(
    investment.amount,
    investment.di,
    investment.cdb,
    getDurationInDays()
  );
});

const resultLcx = computed(() => {
  return getLcxResult(
    investment.amount,
    investment.di,
    investment.lcx,
    getDurationInDays()
  );
});

function getDurationInDays() {
  return Math.floor(
    investment.period * periodMultiplier[investment.periodType]
  );
}
</script>
<template>
  <h3 class="font-medium text-lg text-black">
    Simulação de rentabilidade do seu investimento conforme o tipo de aplicação:
  </h3>
  <InvestmentResult
    name="Poupança"
    :amount="investment.amount"
    :interest-amount="resultPoupanca.interestAmount"
  />
  <InvestmentResult
    name="CDB"
    :amount="investment.amount"
    :interest-amount="resultCDB.interestAmount"
    :tax-amount="resultCDB.taxAmount"
    :tax-percentage="resultCDB.taxPercentage"
    :iof-amount="resultCDB.iofAmount"
  />
  <InvestmentResult
    name="LCI e LCA"
    :amount="investment.amount"
    :interest-amount="resultLcx.interestAmount"
  />
</template>

<style lang="scss"></style>
