<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useInvestmentStore } from '@/store/investment';

const store = useInvestmentStore();

const error = ref<string>('');

const amount = computed({
  get: () => store.amount,
  set: (value) => store.setAmount(value),
});

watch(amount, () => {
  if (!amount.value || amount.value <= 0)
    error.value = 'Por favor, informe um valor válido!';
  else error.value = '';
});
</script>
<template>
  <div class="flex gap-2 w-full flex-row items-center">
    <span class="material-symbols-outlined text-gray-500 pt-6">
      attach_money
    </span>

    <div class="flex flex-col w-full">
      <label class="text-sm text-gray-600 mb-1"> Valor da Aplicação </label>
      <input
        id="amount"
        v-model="amount"
        type="number"
        placeholder="R$ 500,00"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none"
        :class="error ? 'border-red-500' : 'border-gray-300'"
      />
      <transition name="fade-slide">
        <span v-if="error" class="text-red-600 text-xs flex">
          {{ error }}
        </span>
      </transition>
    </div>
  </div>

  <transition name="fade">
    <div
      v-if="true"
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md border border-gray-200 rounded-lg w-full max-w-md"
    >
      <div class="h-1 bg-indigo-900 rounded-t-md" />
      <div class="flex items-start gap-3 p-4">
        <span class="text-indigo-800 text-xl">
          <span class="material-icons">info</span>
        </span>
        <p class="text-sm text-gray-800">
          Por favor, selecione um item no campo 'De' ou digite um documento
          válido.
        </p>
        <button class="ml-auto text-gray-500 hover:text-gray-700">
          <span class="material-icons text-sm">close</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
