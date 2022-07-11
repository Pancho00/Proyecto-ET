<template>
  <header class="position-absolute top-0 start-0 w-100">
    <nav class="navbar shadow nav">
      <div class="container">
        <RouterLink to="/" class="Link Header-brandLink"></RouterLink>
        <div class="row">
          <div class="col">
            <a href="https://www.remind.com"
              ><img
                src="../assets/img/icon-help.svg"
                alt=""
                class="invertir-color w-50"
                title="Ayuda - Remind.com"
            /></a>
          </div>

          <div class="col">
            <div class="navbar-nav d-inline">
              <RouterLink to="/login" class="px-2 font-style fs-5"
                >Ingresar</RouterLink
              >
              <RouterLink to="/register" class="px-2 font-style fs-5"
                >Registrarse</RouterLink
              >
              <RouterLink to="/home" class="px-2 font-style fs-5"
                >Home</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap");

body {
  margin-top: 60px;
}
.nav {
  --color: #13678a;
  background-color: var(--color);
  height: 60px;
}

.Header-brandLink {
  overflow: hidden;
  text-indent: 150%;
  width: 90px;
  height: 30px;
  background: url("../assets/img/remind-logo.svg");
  background-repeat: no-repeat;
  display: block;
}

.invertir-color {
  filter: invert(100%);
}
.nav a {
  color: white;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  text-shadow: 1px 1px 10px white;
}

.font-style {
  font-family: "Manrope", sans-serif;
}
</style>
