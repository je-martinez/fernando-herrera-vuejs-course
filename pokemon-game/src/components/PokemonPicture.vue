<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      class="hidden-pokemon"
      :src="imgSrc"
      alt="pokemon"
    />
    <img v-else :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 200px;
  position: absolute;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
