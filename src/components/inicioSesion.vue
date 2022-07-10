<template>
  <div class="cont d-flex justify-content-center" id="componentes">
    <div class="inicioSesion row d-flex shadow m-1">
      <div class="imagen col-md-8 col-12">
        <img
          class="w-100"
          src="https://blog.uvirtual.org/hubfs/Marketing%20-%20Recursos/Blog/Fotos%20Blog/estudiantes-maestria-online.png"
        />
      </div>
      <div class="sesion col d-flex justify-content-center align-items-center">
        <div class="w-75">
          <div class="alert alert-danger" role="alert" v-if="valorIncorrecto">
            Nombre de usuario o Contraseña incorrecta.
          </div>
          <div class="d-flex justify-content-center my-3">
            <h3 class="tituloSesion">Iniciar sesión</h3>
          </div>
          <form name="login" action="" method="post">
            <input
              type="text"
              class="form-control my-3"
              placeholder="Usuario"
              name="username"
              v-model="this.usuario"
            />
            <input
              type="password"
              class="form-control my-3"
              placeholder="Contraseña"
              name="password"
              v-model="this.clave"
            />
            <div class="d-flex justify-content-center my-3">
              <button
                class="btn btn-primary"
                type="button"
                name="login-submit"
                id="login-submit"
                value="Ingresar"
                @click="login(usuario, clave)"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      clave: "",
      valorIncorrecto: false,
    };
  },
  methods: {
    login() {
      let json = {
        usuario: this.usuario,
        clave: this.clave,
      };
      if (json.clave == "password" && json.usuario == "admin") {
        this.valorIncorrecto = false;
        this.$router.push({ name: "home" });
      } else {
        this.valorIncorrecto = true;
      }
    },
  },
};
</script>

<style scoped>
.cont {
  position: relative;
  width: 100%;
  height: 100%;
}

.imagen.col-md-8 {
  padding: 0;
}
.sesion {
  background-color: #012130;
}

.tituloSesion {
  -webkit-text-fill-color: #45c4b0;
  -webkit-text-stroke: 0.25px black;
}
</style>
