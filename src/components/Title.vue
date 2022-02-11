<template>
  <section class="title">
    <h1 class="title__header center">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  background: #f8f3f4;

  &__header {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #f16d7f;
    padding-top: 60px;
    padding-bottom: 60px;
    margin: 0;
  }
}
</style>
