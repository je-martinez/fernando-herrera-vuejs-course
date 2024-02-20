import IndecisionComponent from "@/components/IndecisionComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("IndecisionComponent.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);
  });

  it("should match with snapshot default value", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
