import pokemonApi from "@/api/PokemonApi";

describe("pokemonApi", () => {
  test("axios should be setup correctly", () => {
    const axiosConfig = pokemonApi.defaults;
    // expect(axiosConfig.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
  });
});
