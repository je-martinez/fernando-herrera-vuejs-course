<template>
  <Navbar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <RouterView />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const Navbar = defineAsyncComponent(() =>
  /* webpackChunkName: "nav-bar-component" */ import(
    "@/modules/shared/components/Navbar.vue"
  )
);

export default {
  name: "App",
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>
