const app = Vue.createApp({
  //   template: `
  //   <h1>Hello, World!</h1>
  //   <p>It's a beautiful day.</p>`,
  //   methods: {},
  //   watch: {},
  //   setup: {},

  data() {
    return {
      title: "Hello, World!",
      message: "It's a beautiful day.",
    };
  },
});

app.mount("#myApp");
