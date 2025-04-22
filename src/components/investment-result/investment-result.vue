<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  name: string;
  amount: number;
  interestAmount: number;
  iofAmount?: number;
  taxAmount?: number;
  taxPercentage?: number;
}

const props = defineProps<IProps>();

const defaultLocale = 'pt-BR';

const name = computed(() => props.name);
const hasAmount = computed(() => !!props.amount);
const totalAmount = computed(() => props.amount + totalProfit.value);
const totalProfit = computed(() => {
  return props.interestAmount - (props.iofAmount || 0) - (props.taxAmount || 0);
});
const totalProfitPercentage = computed(
  () => (totalProfit.value / props.amount) * 100
);
const amountDisplay = computed(() => filters.currency(props.amount));
const iofAmountDisplay = computed(() => filters.currency(props.iofAmount || 0));
const taxAmountDisplay = computed(() => filters.currency(props.taxAmount || 0));
const liquidAmountDisplay = computed(() => filters.currency(totalProfit.value));
const totalAmountDisplay = computed(() => filters.currency(totalAmount.value));
const taxPercentageDisplay = computed(() =>
  filters.percent(props.taxPercentage || 0)
);
const interestAmountDisplay = computed(() =>
  filters.currency(props.interestAmount)
);

const filters = {
  percent(amount: number) {
    return (
      amount.toLocaleString(defaultLocale, { maximumFractionDigits: 2 }) + '%'
    );
  },
  number(amount: number) {
    return amount.toLocaleString(defaultLocale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  },
  currency(amount: number) {
    return amount.toLocaleString(defaultLocale, {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'symbol',
      minimumFractionDigits: 2,
    });
  },
};
</script>
<template>
  <div class="bg-white shadow-lg rounded-lg p-3 mb-5">
    <div class="font-medium text-black text-lg mb-1">{{ name }}</div>
    <p v-if="hasAmount" class="text-sm">Valor Investido: {{ amountDisplay }}</p>
    <p v-if="!!interestAmount" class="text-sm">
      Rendimento Bruto: {{ interestAmountDisplay }}
    </p>
    <p v-if="!!iofAmount" class="text-sm">IOF: {{ iofAmountDisplay }}</p>
    <p v-if="!!taxAmount" class="text-sm">
      Imposto de Renda: {{ taxAmountDisplay }}
      <span
        v-if="!!taxPercentage"
        class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
      >
        {{ taxPercentageDisplay }}
      </span>
    </p>
    <p class="text-sm">Rendimento Líquido: {{ liquidAmountDisplay }}</p>
    <p class="text-sm">Valor Total Líquido: {{ totalAmountDisplay }}</p>
    <div
      class="w-full bg-[#fff7e6] h-6 rounded-sm relative overflow-hidden mt-2"
    >
      <div
        class="h-full bg-yellow-500 absolute left-0 top-0"
        :style="{ width: totalProfitPercentage + '%' }"
      />

      <div class="absolute inset-0 flex items-center justify-center z-10">
        <span class="text-sm font-medium text-gray-700">
          {{ totalProfitPercentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
