<template>
  <section class="promo">
    <div class="wrap promo__wrap">
      <div class="promo__title">
        <h1 class="promo__header">
          <span class="promo__title__font-big">THE BRAND</span> <br />
          <span class="promo__title__font-thin">OF LUXERIOUS</span>
          <span class="promo__title__font-red">FASHION</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.promo {
  background: #f1e4e6;
  margin-bottom: 36px;

  &__wrap {
    min-height: 764px;
    background-image: url(../assets/img/promo-picture.png);
    background-repeat: no-repeat;
    background-position-x: -226px;
    background-position-y: bottom;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__header {
    margin: 0;
  }

  &__title {
    width: 50%;
    padding-left: 15px;
    border-left: 12px solid #f16d7f;

    &__font-big {
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 58px;
      color: #222222;
    }

    &__font-thin {
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
    }

    &__font-red {
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      color: #f16d7f;
    }
  }
}
</style>
