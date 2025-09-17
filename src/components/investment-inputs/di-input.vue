<script setup lang="ts">
import { useInvestmentStore } from '@/store/investment';
import { computed, ref, watch } from 'vue';

const store = useInvestmentStore();
const error = ref<string>('');
const selectedOption = ref({ text: 'Pós fixado', value: 'pos' });
const options = ref([
  { text: 'Prefixado', value: 'pre' },
  { text: 'Pós-fixado', value: 'pos' },
  { text: 'IPCA+', value: 'ipca' },
]);

const di = computed({
  get: () => store.di,
  set: (value) => store.setDi(value),
});

watch(di, () => {
  if (!di.value || di.value <= 0)
    error.value = 'Por favor, informe um valor válido!';
  else error.value = '';
});
</script>

<template>
  <div class="flex gap-2 w-full flex-row items-center">
    <span class="material-symbols-outlined text-gray-500 pt-10">
      view_kanban
    </span>
    <div class="flex flex-col w-full">
      <label class="text-sm text-gray-600 mb-1"> Tipo de Rentabilidade </label>
      <span v-if="selectedOption.value === 'pos'" class="text-xs text-gray-600">
        Rendem de acordo com uma porcentagem do CDI. Estamos considerando o CDI
        como 14.9%.
      </span>
      <span v-if="selectedOption.value === 'pre'" class="text-xs text-gray-600">
        Rendem conforme uma taxa fixa combinada no momento da compra.
      </span>
      <select
        v-model="selectedOption.value"
        class="w-full px-4 py-2 h-10 border border-gray-300 rounded-xl focus:outline-none"
      >
        <option v-for="item in options" :key="item.text" :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </div>
  </div>
  <div class="flex gap-2 w-full flex-row items-center">
    <span class="material-symbols-outlined text-gray-500 pt-6">
      bar_chart
    </span>
    <div class="flex flex-col w-full">
      <label class="text-sm text-gray-600 mb-1">
        Taxa
        <span v-if="selectedOption.value === 'pos'" class="text-xs">
          % do CDI
        </span>
        <span v-if="selectedOption.value === 'pre'" class="text-xs">% a.a</span>
      </label>
      <input
        id="di"
        v-model="di"
        type="number"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none"
        :class="error ? 'border-red-500' : 'border-gray-300'"
        placeholder="% ao ano"
      />
      <transition name="fade-slide">
        <span v-if="error" class="text-red-600 text-xs flex">
          {{ error }}
        </span>
      </transition>
    </div>
  </div>
</template>

<style scoped>
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
