import PokemonPage from "@/pages/PokemonPage.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemonArrayMock } from "../mocks/pokemons.mock";
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

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
          pokemonArr: pokemonArrayMock,
          pokemon: pokemonArrayMock[0],
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render PokemonPicture Component & PokemonOptions Component", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArrayMock,
          pokemon: pokemonArrayMock[0],
        };
      },
    });

    const picture = wrapper.findComponent("pokemon-picture-stub");
    const options = wrapper.findComponent("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(Number(picture.attributes("pokemonid"))).toBe(1);
    expect(Number(picture.props("pokemonId"))).toBe(1);

    expect(options.props("pokemons")).toEqual(pokemonArrayMock);
    expect(options.attributes("pokemons")).toBeTruthy();
  });
});
