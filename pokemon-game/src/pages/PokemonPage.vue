<template>
  <h1 v-if="!pokemon">Espere por favor......</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer" />
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
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
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      const tmp = await getPokemonOptions();
      this.pokemonArr = [...tmp];
      const rndInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, es ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.mixPokemonArray();
    },
  },
};
</script>

<style></style>
