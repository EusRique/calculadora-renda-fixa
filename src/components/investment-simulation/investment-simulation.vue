<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import InvestmentResult from '../investment-result/investment-result.vue';
import { useInvestmentStore, PeriodTypes } from '@/store/investment';
import { getPoupancaResult } from '@/domain/poupança';
import { getCDBResult } from '@/domain/cdb';

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
  <div class="bg-white shadow-lg rounded-lg p-3 mb-5">
    <div class="bg-white shadow-lg rounded-lg p-3 mb-5">
      <div class="font-medium text-black text-lg mb-1">LCI e LCA</div>
      <p class="text-sm">Valor investido: R$ 1.000,00</p>
      <p class="text-sm">Rendimento Bruto: R$ 6,45</p>
      <p class="text-sm">Rendimento Líquido: R$ 6,45</p>
      <p class="text-sm">Valor Total Líquido: R$ 1.006,45</p>
      <div
        class="w-full bg-[#fff7e6] h-6 rounded-sm relative overflow-hidden mt-2"
      >
        <!-- Barra de progresso preenchida -->
        <div
          class="h-full bg-yellow-500 absolute left-0 top-0"
          :style="{ width: percentual + '%' }"
        />

        <!-- Texto central -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <span class="text-sm font-medium text-gray-700">
            {{ percentual.toFixed(2).replace('.', ',') }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
