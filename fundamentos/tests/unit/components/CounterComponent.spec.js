import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/CounterComponent.vue";

describe("Counter.vue", () => {
  it("renders props.title when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      props: {
        title: msg,
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
