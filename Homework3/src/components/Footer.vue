<template>
  <footer>
    <router-link to="/contact" class="link">Contact us</router-link>
    <a>Tartu 2021</a>
    <a>Homework 3</a>
  </footer>
</template>

<style lang="scss">
footer {
  padding: 1rem 0.5rem;
  width: calc(100% - 1rem);
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: #1778bd;

  .link {
    color: white;
  }
}
</style>
