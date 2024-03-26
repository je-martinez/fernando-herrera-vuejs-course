<template>
  <div class="main-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <CustomLink v-for="link in links" :key="link.to" :link="link" />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        {
          to: "/home",
          name: "Pokemons",
        },
        {
          to: "/50",
          name: "By ID",
        },
        {
          to: "/about",
          name: "About",
        },
        {
          to: "https://google.com",
          name: "Google",
        },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import("@/modules/shared/components/CustomLink.vue")
    ),
  },
};
</script>
