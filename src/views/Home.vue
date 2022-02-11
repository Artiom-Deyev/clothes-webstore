<template>
  <Promo />
  <Categories />
  <Products />
  <Advantages />
</template>

<script>
// @ is an alias to /src
import Promo from "../components/Promo.vue";
import Categories from "../components/Categories.vue";
import Products from "../components/Products.vue";
import Advantages from "../components/Advantages.vue";

export default {
  name: "Home",
  components: {
    Promo,
    Categories,
    Products,
    Advantages,
  },
};
</script>
