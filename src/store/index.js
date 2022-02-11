import { createStore } from "vuex";

export default createStore({
  state: {
    cart: JSON.parse(window.localStorage.getItem("cart")) || [],
    cartCount: JSON.parse(window.localStorage.getItem("cartCount")) || 0,
    totalPrice: JSON.parse(window.localStorage.getItem("cartCount")) || 0,
    shipping: JSON.parse(window.localStorage.getItem("shipping")) || {
      country: "",
      address: "",
      postcode: 0,
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      let found = state.cart.find((item) => item.id == product.id);
      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
        // console.log(found.quantity);
        // console.log(found.totalPrice);
      } else {
        state.cart.push(product);
        //console.log(product.totalPrice);
      }
      state.cartCount++;
      state.cart.totalPrice = state.cart.reduce(
        (acc, product) => (acc += product.totalPrice),
        0
      );
      console.log(state.cart.totalPrice, state.cart[0]);
      this.commit("SAVE_CART");
    },
    SAVE_CART(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
      window.localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      window.localStorage.setItem(
        "totalPrice",
        JSON.stringify(state.totalPrice)
      );
    },
    SAVE_SHIPPING(state) {
      window.localStorage.setItem("shipping", JSON.stringify(state.shipping));
    },
    REMOVE_FROM_CART(state, product) {
      if (state.cart.length == 0) {
        return;
      }
      let index = state.cart.findIndex((el) => el.id == product.id);

      let item = state.cart[index];

      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        state.cart.splice(item, 1);
      }

      state.cartCount -= 1;
      state.cart.totalPrice = state.cart.reduce(
        (acc, product) => (acc += product.totalPrice),
        0
      );
      //console.log(item.quantity, state.cart.totalPrice);

      this.commit("SAVE_CART");
    },
    // INCREASE_QUANTITY(state, product, quantity) {
    //   let index = state.cart.findIndex((el) => el.id == product.id);

    //   let n = quantity;

    //   //console.log(index, n);

    //   //this.commit("SAVE_CART");
    // },
    CLEAR_CART(state) {
      state.cart = [];
      state.cartCount = 0;
      state.totalPrice = 0;
      this.commit("SAVE_CART");
    },
  },
  actions: {},
  modules: {},
});
