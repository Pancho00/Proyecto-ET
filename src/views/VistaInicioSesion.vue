<template>
  <main>
    <BarraSuperior />
    <div class="my-5"></div>
    <InicioSesion />
    <BarraInferior />
  </main>
</template>

<script setup>
import InicioSesion from "../components/inicioSesion.vue";
</script>
<style scoped>
body{
    margin-bottom: 60px;
}
</style>