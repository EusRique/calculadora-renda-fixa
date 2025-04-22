<script setup lang="ts">
import Home from '@/views/home-page.vue';
import Header from '@/components/header/header-page.vue';
import { useInvestmentStore } from '@/store/investment';
import { onMounted } from 'vue';

const store = useInvestmentStore();

onMounted(() => {
  store.initializeStore();
});
</script>

<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<style scoped></style>
