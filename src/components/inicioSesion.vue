<template>
  <div class="cont d-flex justify-content-center" id="componentes">
    <div
        class="alert alert-danger alerta mt-3 "
        role="alert"
        v-if="valorIncorrecto"
      >
        Datos ingresados incorrectos
        <button class="btn-close float-right" v-on:click="cerrar_alerta()"></button>
      </div>
    <div class="inicioSesion row d-flex m-1">
       
      <div class="imagen col-md-8 col-12">
        <img
          class="w-100"
          src="https://blog.uvirtual.org/hubfs/Marketing%20-%20Recursos/Blog/Fotos%20Blog/estudiantes-maestria-online.png"
        />
      </div>
      <div class="sesion col d-flex justify-content-center align-items-center">
        <div class="w-75">
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
                class="btn btn-primary bton"
                type="button"
                name="login-submit"
                id="login-submit"
                value="Ingresar"
                @click="login(usuario, clave)"
              >
                Ingresar
              </button>
            </div>
            <div class="d-flex justify-content-center my-3">
              <RouterLink to="/register" class="px-2 display-1 fs-6"
                >Registrarse</RouterLink
              >
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
    cerrar_alerta() {
      this.valorIncorrecto = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');
.cont {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Manrope', sans-serif;
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
.inicioSesion.row {
  box-shadow: 2px 2px 20px 5px rgba(85, 85, 85, 0.7);
}
a {
  color: white;
  text-decoration: none;
}
.btn-primary.bton {
  background-color: #13678a;
}
.alert.alerta{
 position: fixed
}
</style>
