<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <p>{{ name }}</p>
    <button @click="name = 'Text 2'">Change Text</button>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      name: "Text 1",
    };
  },
  beforeCreate() {
    console.log("About Page beforeCreate");
  },
  created() {
    console.log("About Page created");
  },
  beforeMount() {
    console.log("About Page beforeMount");
  },
  mounted() {
    console.log("About Page mounted");
  },
  beforeUpdate() {
    console.log("About Page beforeUpdate");
  },
  updated() {
    console.log("About Page updated");
  },
  activated() {
    console.log("About Page activated");
  },
  deactivated() {
    console.log("About Page deactivated");
  },
  beforeUnmount() {
    console.log("About Page beforeUnmount");
  },
  unmounted() {
    console.log("About Page unmounted");
  },
  errorCaptured(err, vm, info) {
    console.log("About Page errorCaptured");
  },
  renderTracked() {
    console.log("About Page renderTracked");
  },
  renderTriggered() {
    console.log("About Page renderTriggered");
  },
};
</script>
