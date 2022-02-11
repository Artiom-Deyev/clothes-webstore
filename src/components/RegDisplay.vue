<template>
  <div class="reg-display">
    <h3>
      Thank you for your registration {{ reference }} {{ name }} {{ surname }}
    </h3>
    <p>You will receive further instrcutions on your email: {{ mail }}</p>
  </div>
</template>

<script>
export default {
  name: "RegDisplay",
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  computed: {
    reference() {
      if (this.gender === "M") {
        return "mister";
      } else {
        return "madame";
      }
    },
  },
};
</script>

<style scoped>
.reg-display {
  border: solid black 1px;
  padding: 5%;
  height: fit-content;
}
</style>
