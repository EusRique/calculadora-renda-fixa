<script setup lang="ts">
import { computed } from 'vue';
import { PeriodTypes, useInvestmentStore } from '@/store/investment';

const store = useInvestmentStore();

const periodTypesOptions = computed(() => Object.values(PeriodTypes));
const periodType = computed({
  get: () => store.periodType,
  set: (type) => store.setPeriodType(type),
});
</script>
<template>
  <div>
    <label class="text-gray-600 text-sm mb-1 block"> Tipo de período </label>
    <select
      v-model="periodType"
      class="w-full px-4 py-2 h-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option v-for="item in periodTypesOptions" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<style lang="scss"></style>
