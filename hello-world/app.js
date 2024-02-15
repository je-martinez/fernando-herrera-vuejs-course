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
  methods: {
    changeMessage() {
      this.message = "It's a beautiful evening.";
      this.toCapitalize();
    },
    toCapitalize() {
      this.message = this.message.toUpperCase();
    },
  },
});

app.mount("#myApp");
