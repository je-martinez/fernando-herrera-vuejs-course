import PokemonPage from "@/pages/PokemonPage.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemonArrayMock } from "../mocks/pokemons.mock";

describe("PokemonPage.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage, {});
  });

  test("should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should call mixPokemonArray on mounted", () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    );
    shallowMount(PokemonPage, {});
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("should match with the snapshot when pokemonArray is not empty", () => {
    //Load all the child components
    // mount(PokemonPage, {

    // Load only the parent component
    shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArray: pokemonArrayMock,
          pokemon: pokemonArrayMock[0],
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
