import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock,
      },
    });
  });

  test("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should show the 4 options correctly", () => {
    const [p1, p2, p3, p4] = wrapper.findAll("li");

    expect(p1.exists()).toBeTruthy();
    expect(p1.text()).toBe("bulbasaur");
    expect(p2.exists()).toBeTruthy();
    expect(p2.text()).toBe("pikachu");
    expect(p3.exists()).toBeTruthy();
    expect(p3.text()).toBe("mew");
    expect(p4.exists()).toBeTruthy();
    expect(p4.text()).toBe("caterpie");
  });
});
