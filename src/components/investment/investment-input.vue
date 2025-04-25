<script setup lang="ts">
import AmountInput from '@/components/investment-inputs/amount-input.vue';
import PeriodInput from '../investment-inputs/period-input.vue';
import PeriodTypeInput from '../investment-inputs/period-type-input.vue';
import DiInput from '../investment-inputs/di-input.vue';
import SelicInput from '../investment-inputs/selic-input.vue';
import CdbInput from '../investment-inputs/cdb-input.vue';
import LcxInput from '../investment-inputs/lcx-input.vue';
</script>
<template>
  <div class="bg-white shadow-lg rounded-lg p-3">
    <h2 class="font-medium text-lg text-black mb-4">
      Calculadora de Renda Fixa
    </h2>
    <form class="space-y-5">
      <AmountInput />
      <div class="grid grid-cols-2 gap-4">
        <PeriodInput />
        <PeriodTypeInput />
      </div>
      <DiInput />
      <SelicInput />
      <CdbInput />
      <LcxInput />
    </form>
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>
