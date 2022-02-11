<template>
  <section class="advantages">
    <h2 class="hidden">Advantages</h2>
    <div class="wrap advantages__wrap">
      <div
        class="advantages__block advantages__block__delivery animation-large"
      >
        <h3 class="advantages__header">Free Delivery</h3>
        <p class="text">
          Wordlwide delivery on all. Authoritively morph next-generation
          innovation with extensive models.
        </p>
      </div>
      <div
        class="advantages__block advantages__block__discount animation-large"
      >
        <h3 class="advantages__header">Sales & discounts</h3>
        <p class="text">
          Wordlwide delivery on all. Authoritively morph next-generation
          innovation with extensive models.
        </p>
      </div>
      <div
        class="advantages__block advantages__block__assurance animation-large"
      >
        <h3 class="advantages__header">Quality assurance</h3>
        <p class="text">
          Wordlwide delivery on all. Authoritively morph next-generation
          innovation with extensive models.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hidden {
  display: none;
}
.advantages {
  background: #222224;

  &__wrap {
    display: flex;
    justify-content: space-around;
  }

  &__block {
    width: 380px;
    text-align: center;
    margin-top: 103px;
    margin-bottom: 104px;

    &__delivery {
      background-image: url(../assets/img/delivery-icon.png);
      background-repeat: no-repeat;
      background-position-x: center;
    }

    &__discount {
      background-image: url(../assets/img/discount-icon.png);
      background-repeat: no-repeat;
      background-position-x: center;
      padding-left: 30px;
      padding-right: 30px;
    }

    &__assurance {
      background-image: url(../assets/img/quality-icon.png);
      background-repeat: no-repeat;
      background-position-x: center;
    }
  }

  &__header {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 19.96px;
    line-height: 24px;
    color: #fbfbfb;
    padding-top: 60px;
  }
}

.text {
  font-family: Lato;
  font-style: normal;
  font-weight: 200;
  font-size: 13.972px;
  line-height: 17px;
  text-align: center;

  color: #fbfbfb;
}
</style>
