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

  it("should not trigger nothing on typing", async () => {
    const input = wrapper.find("input");
    await input.setValue("holis");
    const spyGetAnswer = jest.spyOn(wrapper.vm, "getAnswer");
    expect(spyGetAnswer).not.toHaveBeenCalled();
  });

  it("should trigger api call if '?' was typed", async () => {});

  it("should execute getAnswer on success", async () => {});
  it("should execute getAnswer on failed", async () => {});
});
