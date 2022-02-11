<template>
  <section class="cart">
    <div class="wrap cart__wrap">
      <div class="cart__main">
        <CartContent />
        <CartShipping />
      </div>
    </div>
  </section>
</template>

<script>
import CartContent from "../components/CartContent.vue";
import CartShipping from "../components/CartShipping.vue";

export default {
  components: {
    CartContent,
    CartShipping,
  },
  data() {
    return {
      cart: 1,
    };
  },
  methods: {
    updateCart() {
      this.cart += 1;
      //console.log(this.cart);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__main {
    display: flex;
    padding-top: 96px;
    justify-content: space-evenly;
    margin-bottom: 50px;
  }

  &__content {
    margin-right: 128px;
  }

  &__card {
    display: flex;
    min-width: 652px;
    box-shadow: 20px 20px 20px #e5e5e5;
    margin-bottom: 40px;
  }

  &__img {
    width: 262px;
    height: 306px;
    background: #f3eeef;
  }

  &__features {
    padding: 22px 97px 52px 31px;
  }

  &__name {
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
  }

  &__button {
    width: 18px;
    height: 18px;
    background: none;
    border: none;
    margin-top: 28px;
    margin-right: 22px;
  }

  &__list {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #575757;
    list-style: none;
    padding: 0;
    margin-top: 42px;
    margin-bottom: 0;
  }

  &__list-item {
    padding-top: 6px;
  }

  &__quantity-input {
    width: 44px;
    margin-left: 10%;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
  }

  &__shipping {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__btn-operate {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    padding: 17px 41px 16px 39px;
    color: #000000;
    background: #ffffff;
    border: 1px solid #a4a4a4;
    margin-top: 32px;
    margin-bottom: 128px;
  }

  &__btn-link {
    text-decoration: none;
    color: #000000;
  }

  &__shipping-header {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    margin-bottom: 20px;
  }

  &__input {
    font-family: Lato;
    width: 360px;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #4a4a4a;
    padding: 13px 13px 16px 17px;
    border: 1px solid #a4a4a4;
    margin-bottom: 20px;
    background: #ffffff;
  }

  &__checkout {
    background: #f5f3f3;
    display: flex;
    flex-direction: column;
    padding: 39px 34px 42px 43px;
    margin-top: 37px;
  }

  &__text {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #4a4a4a;
    text-align: right;
    margin-top: 0;
  }

  &__line {
    display: block;
    size: 1px;
    width: 275px;
    margin-bottom: 17px;
    border-color: #e2e2e2;
  }

  &__pay {
    font-family: Lato;
    background: #f16d7f;
    padding: 15px 43px 16px 41px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    border: none;
    color: #ffffff;
    width: 273px;
    align-self: center;
  }

  &__pay:hover {
    background: #ffffff;
    color: #f16d7f;
  }
}

.submit {
  padding: 9px 14px 11px 14px;
  width: fit-content;
}

.grand {
  font-size: 16px;
  line-height: 19px;
}
</style>
