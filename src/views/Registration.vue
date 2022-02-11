<template>
  <Title :title="title" />
  <Reg />
</template>

<script>
import Title from "../components/Title.vue";
import Reg from "../components/Reg.vue";

export default {
  name: "Registration",
  components: {
    Title,
    Reg,
  },
  data() {
    return {
      title: "Registration",
    };
  },
};
</script>

<style lang="scss">
.reg {
  display: flex;
  padding-top: 48px;

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
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
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
