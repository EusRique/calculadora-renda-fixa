<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useInvestmentStore } from '@/store/investment';

const store = useInvestmentStore();
const error = ref<string>('');

const selic = computed({
  get: () => store.selic,
  set: (value) => store.setSelic(value),
});

watch(selic, () => {
  if (!selic.value || selic.value <= 0)
    error.value = 'Por favor, informe um valor válido!';
  else error.value = '';
});
</script>

<template>
  <div class="flex gap-2 w-full flex-row items-center">
    <span class="material-symbols-outlined text-gray-500 pt-6">
      bar_chart
    </span>

    <div class="flex flex-col w-full">
      <label class="text-sm text-gray-600 mb-1">
        Taxa SELIC
        <span class="text-xs">(a.a)</span>
      </label>
      <input
        id="selic"
        v-model="selic"
        type="number"
        placeholder="% ao ano"
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
