<template>
  <div class="cart__card animation-large">
    <img src="../assets/img/cart-img.png" alt="cart-img" class="cart__img" />
    <div class="cart__features">
      <div class="cart__info">
        <h2 class="cart__name">{{ card.name }}</h2>
        <ul class="cart__list">
          <li class="cart__list-item">
            Price: <span class="price">{{ card.price }}</span>
          </li>
          <li class="cart__list-item">Color: Red</li>
          <li class="cart__list-item">Size: XL</li>
          <li class="cart__list-item">
            Quantity:
            {{ card.quantity }}
          </li>
        </ul>
      </div>
    </div>
    <button class="cart__button">
      <img
        src="../assets/img/close.svg"
        class="cart__button-img animation-large"
        alt="close"
        @click.prevent="removeFromCart(card)"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      productQuantity: 0,
    };
  },
  methods: {
    removeFromCart(card) {
      this.$store.commit("REMOVE_FROM_CART", card);
    },
    changeQuantity(card) {
      let quantity = this.productQuantity;

      this.$store.commit("INCREASE_QUANTITY", card, quantity);
      //console.log(quantity);
    },
  },
};
</script>
