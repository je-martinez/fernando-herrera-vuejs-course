import PokemonPage from "@/pages/PokemonPage.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemonArrayMock, pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonPage.vue", () => {
  test("should match with the snapshot", () => {
    const wrapper = shallowMount(PokemonPage, {});
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
    //Load all the child components but already rendered as it is
    // mount(PokemonPage, {

    // Load only the parent component with components with stubs
    const wrapper = shallowMount(PokemonPage, {
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

  test("should checkAnswer method should return true", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArrayMock,
          pokemon: pokemonArrayMock[0],
        };
      },
    });

    wrapper.vm.checkAnswer(1);
    await wrapper.vm.$nextTick();
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBe(true);
    expect(wrapper.find("h2").text()).toBe(
      `Correcto, es ${pokemonsMock[0].name}`
    );

    wrapper.vm.checkAnswer(2);
    await wrapper.vm.$nextTick();
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBe(true);
    expect(wrapper.find("h2").text()).toBe(`Oops, era ${pokemonsMock[0].name}`);
  });
});
