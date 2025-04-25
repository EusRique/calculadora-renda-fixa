<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useInvestmentStore } from '@/store/investment';

const store = useInvestmentStore();
const error = ref<string>('');

const lcx = computed({
  get: () => store.lcx,
  set: (value) => store.setLcx(value),
});

watch(lcx, () => {
  if (!lcx.value || lcx.value <= 0)
    error.value = 'Por favor, informe um valor válido!';
  else error.value = '';
});
</script>

<template>
  <div>
    <div class="flex gap-2 w-full flex-row items-center">
      <span class="material-symbols-outlined text-gray-500 pt-6">
        trending_up
      </span>

      <div class="flex flex-col w-full">
        <label class="text-sm text-gray-600 mb-1">Rentabilidade LCI/LCA</label>
        <input
          id="lcx"
          v-model="lcx"
          type="number"
          placeholder="% LCI/LCA"
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
