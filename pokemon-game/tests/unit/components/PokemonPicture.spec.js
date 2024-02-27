import PokemonPicture from "@/components/PokemonPicture";
import { shallowMount } from "@vue/test-utils";
describe("PokemonPicture Component", () => {
  const setup = (props) => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        ...props,
      },
    });
    return { wrapper };
  };

  test("should match with snapshot", () => {
    const { wrapper } = setup({ pokemonId: 1, showPokemon: false });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should show the hidden image and the pokemon number", () => {
    const wrapper = setup({ pokemonId: 100, showPokemon: false });
    const [img1, img2] = wrapper.wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBeUndefined();
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
  });

  test("should show the pokemon image and the pokemon number", () => {
    const wrapper = setup({ pokemonId: 100, showPokemon: true });
    const img1 = wrapper.wrapper.find("img");
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes("hidden-pokemon")).toBeFalsy();
    expect(img1.classes("fade-in")).toBeTruthy();
  });
});
