<template>
  <header class="header">
    <div class="wrap header__wrap">
      <div class="header__left">
        <router-link :to="{ name: 'Home' }" class="logo-link">
          <img
            src="../assets/img/logo.svg"
            alt="logo"
            class="animation-large"
          />
        </router-link>
        <!-- Hide for now -->
        <!-- <a href="#" class="link">
          <img
            src="../assets/img/search.svg"
            alt="search"
            class="animation-large"
          />
        </a> -->
      </div>
      <div class="header__right">
        <div class="header__item">
          <input type="checkbox" id="check" class="header__item-check" />
          <label for="check" class="header__item-title animation-large">
            <img src="../assets/img/burger-menu.svg" alt="menu" />
          </label>
          <div class="header__item-drop" v-show="showItemList">
            <label class="header__item-close animation-large" for="check"
              ><img
                src="../assets/img/menu-btn-close.svg"
                class="header__item-close-img"
                alt="close"
            /></label>
            <h3 class="header__item-heading" @click.prevent="toggleItemList">
              MENU
            </h3>
            <h4 class="header__item-heading-list">MAN</h4>
            <router-link :to="{ name: 'CatalogPage' }">
              <ul class="header__item-list">
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Accessories</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Bags</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Denim</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">T-Shirts</a>
                </li>
              </ul>
              <h4 class="header__item-heading-list">WOMAN</h4>
              <ul class="header__item-list">
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Accessories</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Jackets and Coats</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Polos</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">T-Shirts</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Shirts</a>
                </li>
              </ul>
              <h4 class="header__item-heading-list">KIDS</h4>
              <ul class="header__item-list">
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Accessories</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Jackets and Coats</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Polos</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">T-Shirts</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Shirts</a>
                </li>
                <li class="header__item-item">
                  <a href="#" class="header__item-link">Bags</a>
                </li>
              </ul>
            </router-link>
          </div>
        </div>
        <router-link :to="{ name: 'Registration' }" class="link account__link"
          ><img
            src="../assets/img/account.svg"
            alt="logo"
            class="animation-large"
        /></router-link>
        <router-link :to="{ name: 'CartPage' }" class="link"
          ><img
            src="../assets/img/basket.svg"
            alt="logo"
            class="animation-large"
          /><span class="link__cart-length">{{
            this.$store.state.cartCount
          }}</span></router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showItemList: true,
    };
  },
  methods: {
    toggleItemList() {
      this.showItemList = !this.showItemList;
    },
  },
};
</script>

<style scoped lang="scss">
// .header {
//   background-color: #222;
//   padding: 20px 0;

//   &__wrap {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   &__right {
//     display: flex;
//   }

//   &__item-check {
//     display: none;
//     position: relative;
//   }

//   &__item-title {
//     display: block;
//   }

//   &__item-close-img {
//     position: absolute;
//     top: 16px;
//     right: 17px;
//   }

//   &__item-drop {
//     position: absolute;
//     padding-top: 37px;
//     padding-left: 34px;
//     padding-right: 73px;
//     min-height: 764px;
//     background-color: #fff;
//     right: 0;
//     top: 82px;
//     box-shadow: -10px 10px 50px rgb(194, 187, 187);
//     transform: scalex(0);
//     transform-origin: right top;
//     transition: 0.5s;
//   }

//   &__item-check:checked ~ .header__item-drop {
//     display: block;
//     transform: scalex(1);
//   }

//   &__item-check:not(:checked) ~ .header__item-drop {
//     display: none;
//   }

//   &__item-item {
//     list-style-type: none;
//     margin-bottom: 11px;
//   }

//   &__item-heading {
//     margin-bottom: 24px;
//   }

//   &__item-link {
//     text-decoration: none;
//     font-family: Lato;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 17px;
//     /* identical to box height */

//     color: #6f6e6e;
//   }

//   &__item-heading-list {
//     font-family: Lato;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 17px;
//     /* identical to box height */
//     margin-bottom: 12px;
//     color: #f16d7f;
//   }
// }

// .logo-link {
//   margin-right: 38px;
// }

.link {
  &__cart-length {
    color: red;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 17px;
  }
}

// .account__link {
//   margin: 0 35px;
// }

// .animation-large {
//   transition: transform 0.1s;
// }

// .animation-large:hover {
//   transform: scale(1.1);
// }

// .animation-rotate {
//   transition: transform 0.3s;
// }

// .animation-rotate:active {
//   transform: rotateX(-360deg);
// }
</style>
