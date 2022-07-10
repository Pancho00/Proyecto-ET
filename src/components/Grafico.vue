<template>
  <canvas id="graficoSesiones" width="400" height="400"></canvas>
</template>

<script>
export default {
  metods: {
    generarGrafico() {
      var ctx = document.getElementById("graficoSesiones");
      var grafico = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022"],
          dataset: [
            {
              data: [10, 2, 5, 20],
            },
          ],
        },
      });
    }
  },
  mounted() {
    generarGrafico();
  },
};
</script>

<style>
</style>