<script setup >
import { RouterLink, RouterView } from "vue-router";
import listarRegistros from "./components/listarRegistros.vue";
</script>
<template>
  <listarRegistros />
</template>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

</style>
