<template>
  <img v-if="image" :src="image" alt="Vue logo" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="Hazme una pregunta" v-model="question" />
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
      image: undefined,
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      this.answer = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (res) => res.json()
      );
      const messages = {
        yes: "Sí",
        no: "No",
        maybe: "Tal vez",
      };
      this.answer = messages[answer];
      this.image = image;
    },
  },
  watch: {
    question(value) {
      this.isValidQuestion = false;
      if (!value?.includes("?")) return;
      this.isValidQuestion = true;
      this.getAnswer();
    },
  },
};
</script>

<style scoped></style>
