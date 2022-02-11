<template>
  <Header />
  <router-view />
  <Feedback />
  <Footer />
</template>

<script>
import Header from "../src/components/Header.vue";
import Feedback from "../src/components/Feedback.vue";
import Footer from "../src/components/Footer.vue";

export default {
  components: {
    Header,
    Feedback,
    Footer,
  },
};
</script>

<style>
/*# sourceMappingURL=style.css.map */
</style>
