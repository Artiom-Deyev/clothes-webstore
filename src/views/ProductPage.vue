<template>
  <Title :title="title" />
  <Sale />
  <Products />
</template>

<script>
import Products from "../components/Products.vue";
import Sale from "../components/Sale.vue";
import Title from "../components/Title.vue";

export default {
  name: "ProductPage",
  components: {
    Sale,
    Title,
    Products,
  },
  data() {
    return {
      title: "Products",
    };
  },
};
</script>
