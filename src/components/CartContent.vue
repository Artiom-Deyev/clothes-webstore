<template>
  <div class="cart__content">
    <CartCard v-for="card in cards" :key="card.id" :card="card" />
    <div class="cart__nav">
      <button class="cart__btn-operate animation-large" @click="clearCart">
        CLEAR SHOPPING CART
      </button>
      <router-link :to="{ name: 'CatalogPage' }"
        ><button class="cart__btn-operate animation-large">
          CONTINUE SHOPPING
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
import CartCard from "../components/CartCard";
export default {
  components: {
    CartCard,
  },
  data() {
    return {
      inventory: this.$store.state.cart.length,
    };
  },
  methods: {
    clearCart() {
      this.$store.commit("CLEAR_CART");
    },
  },
  computed: {
    cards() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scooped>
.prduct-list {
  color: black;
}
</style>
