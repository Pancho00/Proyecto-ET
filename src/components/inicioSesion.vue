<template>
  <div class="cont d-flex justify-content-center">
    <div class="inicioSesion row d-flex">
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
            />
            <input
              type="password"
              class="form-control my-3"
              placeholder="Contraseña"
              name="password"
            />

            <button class="btn btn-primary" type="submit" name="login-submit" id="login-submit"
                  value="Ingresar" @click="login(usuario,clave)">
                  Ingresar
          </button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
export default{

  data(){
    return{
      usuario:"",
      clave:"",
    };
  }, 
  methods: {
   login() {
      let json = {
        "usuario": this.usuario,
        "clave": this.clave
      };
      if (json.clave == "password" && json.usuario=="admin") {
            this.$router.push('home');
          } else { 
          }

  },
  
   
  },
}

</script>



<style>
.cont {
  position: relative;
  width: 100%;
  height: 100%;
}
.imagen {
  width: 60%;
}
.imagen.col-md-8 {
  padding: 0;
}
.sesion {
  width: 40%;
  background-color: #012130;
}
.inicioSesion {
  width: 85%;
}
.tituloSesion {
  color: #13678a;
}
</style>