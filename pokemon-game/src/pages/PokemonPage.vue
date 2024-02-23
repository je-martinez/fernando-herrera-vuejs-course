<template>
  <h1>¿Quien es este pokemon?</h1>
  <pokemon-picture :pokemonId="35" :showPokemon="true" />
  <pokemon-options :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  mounted() {
    this.mixPokemonArray();
  },
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
    };
  },
  methods: {
    async mixPokemonArray() {
      const tmp = await getPokemonOptions();
      this.pokemonArr = [...tmp];
    },
  },
};
</script>

<style></style>
