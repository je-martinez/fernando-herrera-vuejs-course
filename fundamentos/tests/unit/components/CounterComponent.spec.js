import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/CounterComponent.vue";

describe("Counter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  it("renders props.msg be default value", () => {
    // const msg = undefined;
    // const wrapper = shallowMount(Counter, {
    //   props: {
    //     title: msg,
    //   },
    // });
    const title = wrapper.find("h2");
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe("Counter");
  });

  it("should second <p> tag have default value", () => {
    // const wrapper = shallowMount(Counter);

    // const texts = wrapper.findAll("p");
    // expect(texts[1].text()).toBe("0");

    const text = wrapper.find(`[data-testid="counter"]`);
    expect(text.text()).toBe("0");
  });

  it("should increment the counter", async () => {
    // const wrapper = shallowMount(Counter);
    const incrementButton = wrapper.find("#increment-btn");
    await incrementButton.trigger("click");
    const text = wrapper.find(`[data-testid="counter"]`);
    expect(text.text()).toBe("1");
  });

  it("should decrement the counter", async () => {
    // const wrapper = shallowMount(Counter);
    const decrementButton = wrapper.find("#decrement-btn");
    await decrementButton.trigger("click");
    const text = wrapper.find(`[data-testid="counter"]`);
    expect(text.text()).toBe("-1");
  });

  it("should match with default value", () => {
    const { start } = wrapper.props();
    const text = wrapper.find(`[data-testid="counter"]`);
    expect(text.text()).toBe(start.toString());
  });

  it("should match with props value", () => {
    const title = "hello";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });
    const titleEl = wrapper.find(`h2`);
    expect(titleEl.text()).toBe(title);
  });
});
