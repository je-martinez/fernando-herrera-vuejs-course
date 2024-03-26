<template>
  <div>
    <h1>Pokemon Page</h1>
    <p>This is the pokemon page {{ id }} {{ pokemonId }}</p>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
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
      pokemonId: null,
      pokemon: null,
    };
  },
  created() {
    console.log("Pokemon page created", this.$route);
    this.pokemonId = this.$route.params.id;
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        );
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error(error);
        this.$router.push("/about");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
