<script setup>
import BarraSuperior from "./components/BarraSuperior.vue";
import BarraInferior from "./components/BarraInferior.vue";
</script>

<template>
  <BarraSuperior></BarraSuperior>
  <RouterView />
  <BarraInferior></BarraInferior>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 60px auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
