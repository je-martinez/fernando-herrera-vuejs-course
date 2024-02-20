import IndecisionComponent from "@/components/IndecisionComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("IndecisionComponent.vue", () => {
  let wrapper;

  global.fetch = jest.fn(
    () =>
      new Promise((resolve) =>
        resolve({
          json: () => ({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif",
          }),
        })
      )
  );

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);
    jest.clearAllMocks();
  });

  it("should match with snapshot default value", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should not trigger nothing on typing", async () => {
    const spyGetAnswer = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("holis");
    expect(spyGetAnswer).not.toHaveBeenCalled();
  });

  it("should trigger api call if '?' was typed", async () => {
    const spyGetAnswer = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("what is love?");
    expect(spyGetAnswer).toHaveBeenCalled();
  });

  it("should execute getAnswer on success", async () => {
    await wrapper.vm.getAnswer();

    const image = wrapper.find("img");
    expect(image.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Sí");
  });
  it("should execute getAnswer on failed", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("fake error message"));
    try {
      await wrapper.vm.getAnswer();
    } catch (e) {
      const image = wrapper.find("img");
      expect(image.exists()).toBeFalsy();
      expect(wrapper.vm.answer).toBe("Ups! Algo salió mal. Intenta de nuevo.");
    }
  });
});
