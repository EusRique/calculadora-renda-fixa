<script setup lang="ts">
import InvestmentInput from '@/components/investment/investment-input.vue';
import InvestmentSimulation from '@/components/investment-simulation/investment-simulation.vue';
</script>
<template>
  <div class="flex flex-wrap">
    <!-- Ajuste para dispositivos móveis -->
    <div class="w-full md:w-[35%] p-4">
      <InvestmentInput />
    </div>
    <div class="w-full md:w-[65%] p-4">
      <InvestmentSimulation />
    </div>
  </div>
</template>

<style lang="scss"></style>
