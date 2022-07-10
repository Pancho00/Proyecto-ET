<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data: () => ({
    no_cumple_requi: false,
    no_igual: false,
  }),
  methods: {
    comprovar_y_crear() {
      if (
        this.$refs.contraseña.value.length > 30 ||
        this.$refs.contraseña.value.length < 8
      ) {
        this.no_cumple_requi = true;
      } else if (this.no_cumple_requi == true) {
        this.no_cumple_requi = false;
      }

      this.$refs.contraseña.value != this.$refs.comprovar_con.value
        ? this.abrir_alerta()
        : 0;
    },
    cerrar_alerta() {
      this.no_igual = false;
    },
    abrir_alerta() {
      this.no_igual = true;
    },
    crear_cuenta() {
      this.comprovar_y_crear();
      //en esta pasa subiria al bakend si tubiera una
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-center" id="componentes">
    <div class="card w-70" id="formulario">
      <div class="card-header">
        <h5 style="color: #13678a">crear cuenta</h5>
      </div>
      <div class="card-body">
        <label for="input_nombre" class="form-label">nombre</label>
        <input
          type="text"
          id="input_nombre"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="ingrese su nombre"
          ref="nombre"
        />
        <br />
        <label for="input_clave" class="form-label">crear una contraseña</label>
        <input
          type="password"
          id="input_clave"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="ingrese una contraseña"
          ref="contraseña"
        />
        <div id="passwordHelpBlock" class="form-text" style="color: #13678a">
          contraseña debe tener entre 8-30 caracteres de largo, no incluir
          emojis o carateres especiales.
        </div>
        <div style="color: crimson" v-if="no_cumple_requi">
          la contraseña no cumple con los requisistos anteriores
        </div>
        <br />
        <label for="input_clave_confirmacion" class="form-label"
          >confirme su contraseña</label
        >
        <input
          type="password"
          id="input_clave_confirmacion"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="ingrese una contraseña"
          ref="comprovar_con"
        />

        <br />
        <button
          class="btn btn-primary"
          style="background-color: #13678a"
          v-on:click="crear_cuenta()"
        >
          crear
        </button>
      </div>
    </div>
    <div
      class="alert alert-danger d-flex align-items-center"
      role="alert"
      v-if="no_igual"
      style="position: fixed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-info-circle"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        />
      </svg>
      <strong> ¡alerta!</strong>. la clave y la confiracion de la clave no son
      iguales.
      <button class="btn-close" v-on:click="cerrar_alerta()"></button>
    </div>
  </div>
</template>

<style>
#formulario {
  border-color: #13678a;
  margin-top: 5%;
}

.color_bg {
  background-color: #13678a;
  color: azure;
}
</style>
