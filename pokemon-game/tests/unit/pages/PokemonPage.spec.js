import PokemonPage from "@/pages/PokemonPage.vue";
import { shallowMount } from "@vue/test-utils";

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
});
