<template>
<div class="shadow-lg p-3 mb-5 bg-body rounded">
  <canvas id="graficoSesiones" width="100" height="100"></canvas>
</div>
    
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios"
export default {
  data(){
    return{
      sesiones:null
    }
  },
  metods: {
  },
  mounted() {
    //obtener datos de la base de datos
    axios.get('https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/').then(response => this.sesiones = response.data);
    console.log(this.sesiones);
    //Gráfico
    const ctx = document.getElementById("graficoSesiones");
    const graficoSesiones = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022", "16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022"],
        datasets: [
          {
            label: "Rendimiento por sesión",
            data: [1.2, 1.9, 3, 4.5, 2, 3.3, 4, 5.6, 2, 1,1],
            backgroundColor: [
              "rgba(68, 196, 175, 0.5)",
            ],
            borderColor: [
              "rgba(18, 103, 138, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    graficoSesiones;
    /*
    console.log("wena los k")
    var ctx = document.getElementById("graficoSesiones");
    var grafico = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022"],
          dataset: [
            {
                label: 'progesión por seción',
                data: [10, 2, 5, 20],
            },
          ],
        },
      });
    grafico;
    */
  },
};
</script>

<style>
</style>