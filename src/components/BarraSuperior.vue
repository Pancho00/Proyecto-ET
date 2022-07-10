<template>
  <header class="position-absolute top-0 start-0 w-100">
    <nav class="navbar shadow nav">
      <div class="container">
        <RouterLink to="/" class="Link Header-brandLink"></RouterLink>
        <div class="row">
          <div class="col">
            <RouterLink to="/"
              ><img
                src="../assets/img/icon-help.svg"
                alt=""
                class="invertir-color w-50"
            /></RouterLink>
          </div>

          <div class="col">
            <div class="navbar-nav d-inline">
              <RouterLink to="/login" class="px-2 display-1 fs-5"
                >Login</RouterLink
              >
              <RouterLink to="/register" class="px-2 display-1 fs-5"
                >Registrarse</RouterLink
              >
              <RouterLink to="/" class="px-2 display-1 fs-5">Home</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
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
  color: black;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  font-weight: 400;
}
</style>
