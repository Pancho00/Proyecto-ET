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
    //Gráfico
    const ctx = document.getElementById("graficoSesiones");
    const graficoSesiones = new Chart(ctx, {
      //Definimos el tipo de grafico
      type: "line",
      data: {
        //Las variables de la barra x
        labels: ["12/09/2022", "13/09/2022", "14/09/2022", "15/09/2022", "16/09/2022", "17/09/2022", "18/09/2022", "19/09/2022", "20/09/2022", "21/09/2022"],
        datasets: [
          {
            //Nombre de la gráfica
            label: "Rendimiento por sesión",
            //Los datos visualizados en la gráfica
            data: [1.2, 1.9, 3, 4.5, 2, 3.3, 4, 5.6, 2, 1,1],
            //color de relleno de los datos
            backgroundColor: [
              "rgba(68, 196, 175, 0.5)",
            ],
            //Color del borde de los datos
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
            //Configurción para que comienze desde el valor 0 en la gráfica en el eje y
            beginAtZero: true,
          },
        },
      },
    });
    //Se inicia la gráfica
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