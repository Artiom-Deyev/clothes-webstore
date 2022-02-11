<template>
  <Title :title="title" />
  <Products />
</template>

<script>
import Products from "../components/Products.vue";
import Title from "../components/Title.vue";

export default {
  name: "CatalogPage",
  components: {
    Title,
    Products,
  },
  data() {
    return {
      title: "Catalog",
    };
  },
};
</script>
