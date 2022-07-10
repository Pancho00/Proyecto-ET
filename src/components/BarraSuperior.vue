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
                class="invertir-color w-75"
            /></RouterLink>
          </div>

          <div class="col">
            <div class="navbar-nav">
              <RouterLink to="/login" class="nav-link">Login</RouterLink>
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
</style>