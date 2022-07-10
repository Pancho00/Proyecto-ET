<template>
  <header class="fixed-top">
    <nav class="navbar shadow nav">
      <div class="container">
        <a href="https://www.remind.com" class="Link Header-brandLink"></a>
        <a href="/"
          ><img
            src="../assets/img/icon-help.svg"
            alt=""
            class="invertir-color w-75"
        /></a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
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