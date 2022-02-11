<template>
  <section class="reg wrap">
    <div class="reg__personals">
      <form action="#" class="reg__form">
        <p class="reg__text-main">Your Name</p>
        <div class="reg__half-form">
          <input
            type="text"
            class="reg__input"
            placeholder="First Name"
            v-model="name"
          />
          <input
            type="text"
            class="reg__input"
            placeholder="Last Name"
            v-model="surname"
          />
          <div class="reg__gender">
            <input
              type="radio"
              name="gender"
              checked
              class="reg__gender-label"
              id="M"
              value="M"
              v-model="gender"
            />
            <label for="M">&nbsp; &nbsp; Male &nbsp; &nbsp;</label>

            <input
              type="radio"
              name="gender"
              class="reg__gender-label"
              id="F"
              value="F"
              v-model="gender"
            />
            <label for="F">&nbsp; &nbsp; Female</label>
          </div>
        </div>
        <p class="reg__text-main">Login Details</p>
        <div class="reg__half-form">
          <input
            type="email"
            class="reg__input"
            placeholder="Email"
            id="Female"
            v-model="mail"
          />
          <input
            type="password"
            class="reg__input"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <p class="reg__text-instructions">
          Please use 8 or more characters, with at least 1 number and a mixture
          of uppercase and lowercase letters
        </p>

        <div class="reg__join">
          <button class="reg__join-btn" v-on:click.stop="regHandler">
            JOIN NOW<i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
    <div class="reg__loyalty">
      <h2 class="reg__loyalty-header">LOYALTY HAS ITS PERKS</h2>
      <p class="reg__loyalty-text">
        Get in on the loyalty program where you can earn points and unlock
        serious perks. Starting with these as soon as you join:
      </p>
      <ul class="reg__list">
        <li class="reg__list-text">15% off welcome offer</li>
        <li class="reg__list-text">
          Free shipping, returns and exchanges on all orders
        </li>
        <li class="reg__list-text">$10 off a purchase on your birthday</li>
        <li class="reg__list-text">Early access to products</li>
        <li class="reg__list-text">Exclusive offers & rewards</li>
      </ul>
    </div>
    <RegDisplay
      :name="name"
      :surname="surname"
      :mail="mail"
      :gender="gender"
      :password="password"
      v-show="displayWarning"
    />
  </section>
</template>

<script>
import RegDisplay from "../components/RegDisplay.vue";

export default {
  components: {
    RegDisplay,
  },
  data() {
    return {
      name: "",
      surname: "",
      gender: "M",
      mail: "",
      password: "",
      displayWarning: false,
    };
  },
  methods: {
    regHandler(e) {
      e.preventDefault();
      let customer = {
        name: this.name,
        surname: this.surname,
        gender: this.gender,
        mail: this.mail,
        password: this.password,
      };
      (this.displayWarning = !this.displayWarning), console.log(customer);
    },
  },
};
</script>

<style scoped lang="scss">
.reg {
  display: flex;
  padding-top: 48px;
  justify-content: space-evenly;

  &__personals {
    margin-right: 128px;
  }

  &__form {
    width: 360px;
  }

  &__text-main {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }

  &__input {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: black;
    padding: 13px 0 16px 17px;
    border: 1px solid #a4a4a4;
    margin-bottom: 20px;
  }

  &__gender {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    align-items: center;
    color: #000000;
  }

  &__gender-label {
    display: inline-block;
    vertical-align: top;
    list-style: lower-alpha;
    margin: 0;
    padding-left: 10px;
    padding-right: 20px;
    display: inline-block;
  }

  &__text-instructions {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
    margin: 0;
  }

  &__join {
    background: #f16d7f;
    border: none;
    padding: 16px 24px 16px 28px;
    width: max-content;
    margin-bottom: 96px;
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    margin-top: 39px;
  }

  &__join-btn {
    background: none;
    border: none;
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  &__half-form {
    display: flex;
    flex-direction: column;
  }

  &__loyalty {
    max-width: 652px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  &__loyalty-header {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  &__list {
    list-style-image: url(../assets/img/loyalty-list.svg);
    padding-left: 28px;
  }

  &__list-text {
    padding-left: 10px;
    padding-bottom: 16px;
  }
}

.fa-arrow-right {
  color: white;
  padding-left: 20px;
}
</style>
