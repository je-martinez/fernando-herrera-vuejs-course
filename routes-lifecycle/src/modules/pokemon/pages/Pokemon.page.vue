<template>
  <div>
    <h1>Pokemon Page</h1>
    <p>This is the pokemon page {{ id }} {{ pokemon }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    console.log("Pokemon page created", this.$route);
    this.pokemon = this.$route.params.id;
  },
};
</script>
