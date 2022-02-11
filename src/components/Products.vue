<template>
  <section class="products center">
    <div class="products__correction">
      <div class="products__card" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductCard', params: { id: product.id } }">
          <img
            alt="card-img"
            src="https://via.placeholder.com/320/.jpg/0000FF/808080/?text=ProductImagePlaceholder"
            class="products__img"
          />
          <div class="products__overlay">
            <div
              class="products__button"
              v-on:click.prevent="addToCart(product)"
            >
              <img src="img/basket.svg" alt="cart" class="products__cart" />Add
              to Cart
            </div>
          </div>
          <div class="products__text">
            <p>
              <span class="products__text__header">{{ product.name }}</span>
              <br />
              <br />
              <span class="products__text__font-small"
                >{{ product.description }}
              </span>
              <br />
              <br />
              <span class="products__text__red"
                >Price: {{ product.price }}</span
              >
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import EventService from "../services/EventService.js";

export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", product);
      this.$store.commit("SAVE_CART");
    },
    removeFromCart(product) {
      this.$store.commit("REMOVE_FROM_CART", product);
    },
    clearCart() {
      this.$store.commit("CLEAR_CART");
    },
  },
  computed: {
    getImage() {
      return this.product.img;
    },
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.products = response.data;
        //console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
    // get products from mock db when component is created
  },
};
</script>

<style scoped lang="scss">
.products {
  &__correction {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__header {
    padding-bottom: 0px;
    padding-top: 60px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  &__font-big {
    display: block;
    margin: 0;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
  }

  &__font-small {
    padding-top: 6px;
    font-size: 14px;
    line-height: 17px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9f9f9f;
    margin: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 16px;
    padding-right: 29px;
    padding-bottom: 20px;
    padding-top: 6px;

    &__header {
      font-size: 13px;
      line-height: 16px;
      color: #000000;
      font-weight: 400;
      color: #000000;
    }

    &__font-small {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #5d5d5d;
    }

    &__red {
      font-size: 16px;
      line-height: 19px;
      color: #f16d7f;
    }
  }

  &__card {
    width: 360px;
    margin-top: 30px;
    background-color: #f8f8f8;
    height: fit-content;
    position: relative;
    text-decoration: none;
  }

  &__card:link {
    text-decoration: none;
  }

  &__card:visited {
    text-decoration: none;
  }

  &__card:active {
    text-decoration: none;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 420px;
    background-color: rgba(58, 56, 56, 0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }

  &__card:hover .products__overlay {
    opacity: 1;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    padding: 13px;
    border: 1px solid #ffffff;
  }

  &__cart {
    padding-right: 11px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 96px;
  }

  &__pagination {
    width: 283px;
    display: flex;
    flex-wrap: wrap;
    order: 1;
    justify-content: space-around;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #ef5b70;
    padding: 15px 16px;
    border: 1px solid #ebebeb;

    a {
      color: #e5e5e5;
      text-decoration: none;
    }

    a:active {
      color: #f16d7f;
      text-decoration: none;
    }

    a:visited {
      color: #e5e5e5;
      text-decoration: none;
    }

    &__symbol-before {
      content: url(../assets/img/products-pagination-symbol-before.svg);
    }

    &__symbol-after {
      content: url(../assets/img/products-pagination-symbol.svg);
    }
  }

  .browse {
    box-sizing: border-box;
    margin-bottom: 95px;
    margin-top: 48px;
    display: flex;
    justify-content: center;

    &__button {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #f26376;
      text-decoration: none;
      padding: 14px 38px 13px 38px;
      border: 1px solid #f26376;
      text-align: center;
      width: max-content;
    }

    &__button:hover {
      color: white;
      background-color: #f26376;
    }

    &__text {
      margin: 0;
    }
  }

  .products__nav {
    display: flex;
    padding-top: 51px;
    padding-bottom: 16px;
    background: #ffffff;

    &__spoiler {
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      position: absolute;
      background: #ffffff;
      width: 360px;
      padding-top: 13px;
      padding-left: 16px;
      padding-right: 16px;
    }

    &__spoiler[open] {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
      padding: -20px;
    }

    &__links {
      padding-right: 28px;
    }

    .products__nav__filter {
      width: 50px;
      position: relative;
      z-index: 100;
      top: -12px;
    }

    .products__summary {
      display: block;
    }

    .products__summary::-webkit-details-marker {
      display: none;
    }
  }

  .products__nav__categories {
    display: flex;
    width: 360px;
    margin-left: 30%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6f6e6e;
    z-index: 101;

    .products__categories__summary {
      display: block;
    }

    .products__categories__summary::-webkit-details-marker {
      display: none;
    }

    .products__categories__summary::-webkit-details-mark {
      display: none;
    }

    .products__categories__summary::after {
      content: url(../assets/img/products-nav-categories-symbol.svg);
      padding-left: 10px;
    }
  }

  .products__nav__filter [open] {
    color: #ef5b70;
    & .products__nav-icon {
      fill: #ef5b70;
    }
    & .products__nav-icon-big {
      fill: #ef5b70;
    }
  }

  &__nav-icon {
    margin-left: 11px;
    width: 15px;
    height: 10px;
  }

  &__nav-icon-big {
    display: none;
  }

  &__nav-content {
    position: relative;
  }

  &__nav-title {
    display: block;
    margin-bottom: 18px;
  }

  &__nav-title[open] {
    & .products__nav-summary {
      color: #ef5b70;
      margin-top: 16px;
    }
  }

  &__nav-summary {
    border-left: 5px solid #ef5b70;
    border-bottom: 1px solid #ebebeb;
    padding: 11px 0 0 27px;
    display: block;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding-top: 11px;
    padding-left: 11px;
    padding-bottom: 11px;
    color: #6f6e6e;
  }
  ::-webkit-details-marker {
    display: none;
  }

  &__nav-list {
    margin-top: 24px;
    padding-left: 34px;
  }

  &__nav-item {
    list-style-type: none;
    margin-bottom: 11px;
  }

  &__nav-link {
    text-decoration: none;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 13px;
    color: #6f6e6e;
  }
}
</style>
