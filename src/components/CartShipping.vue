<template>
  <div class="cart__shipping">
    <form class="cart__form">
      <h2 class="cart__shipping-header">SHIPPING ADDRESS</h2>
      <input
        type="text"
        class="cart__input"
        placeholder="Bangladesh"
        v-model="country"
      />
      <input
        type="text"
        class="cart__input"
        placeholder="State"
        v-model="address"
      />
      <input
        type="text"
        placehodler="postcode"
        class="cart__input"
        v-model="postcode"
      />
      <input
        type="submit"
        class="cart__input submit animation-large"
        value="GET A QUOTE"
        @click.prevent="showShipping"
      />
    </form>

    <div class="cart__checkout">
      <p class="cart__text">
        SUB TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${{
          this.$store.state.cart.reduce(
            (acc, product) => (acc += product.totalPrice),
            0
          )
        }}
      </p>
      <p class="cart__text grand">
        GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          class="price grand"
          >${{
            this.$store.state.cart.reduce(
              (acc, product) => (acc += product.totalPrice),
              0
            )
          }}</span
        >
      </p>
      <hr class="cart__line" />
      <input
        @click.prevent="checkout"
        type="submit"
        class="cart__pay animation-large"
        value="PROCEED TO CHECKOUT"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: "",
      address: "",
      postcode: 0,
      cartPrice: this.$store.state.cart.reduce(
        (acc, product) => (acc += product.totalPrice),
        0
      ),
    };
  },
  methods: {
    showShipping() {
      this.$store.state.shipping.country = this.country;
      this.$store.state.shipping.address = this.address;
      this.$store.state.shipping.postcode = this.postcode;

      this.$store.commit("SAVE_SHIPPING");

      alert(`Thank you! Your address: country: ${this.country},
      state: ${this.state}, postcode: ${this.postcode}`);
    },
    checkout() {
      alert(
        `Thank you! Youre payment sum: $${this.$store.state.cart.reduce(
          (acc, product) => (acc += product.totalPrice),
          0
        )}. You will be redirected to the payment page.`
      );
    },
  },
};
</script>
