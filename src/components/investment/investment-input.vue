<script setup lang="ts">
import AmountInput from '@/components/investment-inputs/amount-input.vue';
import PeriodInput from '../investment-inputs/period-input.vue';
import PeriodTypeInput from '../investment-inputs/period-type-input.vue';
import DiInput from '../investment-inputs/di-input.vue';
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
      <div>
        <div class="flex gap-2 w-full flex-row items-center">
          <span class="material-symbols-outlined text-gray-500 pt-6">
            bar_chart
          </span>

          <div class="flex flex-col w-full">
            <label class="text-sm text-gray-600 mb-1">Taxa SELIC</label>
            <input
              type="number"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="% ao ano"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="flex gap-2 w-full flex-row items-center">
            <span class="material-symbols-outlined text-gray-500 pt-6">
              trending_up
            </span>

            <div class="flex flex-col w-full">
              <label class="text-sm text-gray-600 mb-1">CDB/RDB/LC</label>
              <input
                type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="% CDI"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex gap-2 w-full flex-row items-center">
          <span class="material-symbols-outlined text-gray-500 pt-6">
            trending_up
          </span>

          <div class="flex flex-col w-full">
            <label class="text-sm text-gray-600 mb-1">LCI/LCA</label>
            <input
              type="number"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="% CDI"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold transition"
      >
        Calcular
      </button>
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
