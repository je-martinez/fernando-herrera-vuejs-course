import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/CounterComponent.vue";

describe("Counter.vue", () => {
  it("renders props.msg be default value", () => {
    const msg = undefined;
    const wrapper = shallowMount(Counter, {
      props: {
        title: msg,
      },
    });
    const title = wrapper.find("h2");
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe("Counter");
  });

  it("renders props.title when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      props: {
        title: msg,
      },
    });

    expect(wrapper.html()).toMatchSnapshot(msg);

    // expect(wrapper.text()).toMatch(msg);
  });
});
