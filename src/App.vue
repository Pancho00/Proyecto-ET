<script setup>
import { RouterLink, RouterView } from "vue-router";
import BarraSuperior from "./components/BarraSuperior.vue";
import BarraInferior from "./components/BarraInferior.vue";
</script>

<template>
  <BarraSuperior />
  <BarraInferior />
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
