<template>
  <section class="categories center">
    <h2 class="hidden">Products categories</h2>
    <div class="categories__item categories__women animation-large">
      <p>
        30% OFF <br />
        <span class="categories__item__red">FOR WOMEN</span>
      </p>
    </div>
    <div class="categories__item categories__men animation-large">
      <p>
        HOT DEAL<br />
        <span class="categories__item__red">FOR MEN</span>
      </p>
    </div>
    <div class="categories__item categories__kids animation-large">
      <p>
        NEW ARRIVALS<br />
        <span class="categories__item__red">FOR KIDS</span>
      </p>
    </div>
    <div class="categories__item categories__acc animation-large">
      <p>
        LUXURIOUS AND TRENDY<br />
        <span class="categories__item__red">ACCESORIES</span>
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hidden {
  display: none;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;

  &__item {
    width: 32%;
    min-height: 260px;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &__red {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #f16d7f;
    }
  }

  &__acc {
    width: 100%;
    margin-top: 20px;
    min-height: 180px;
    background-image: url(../assets/img/accesories.jpg);
  }

  &__women {
    background-image: url(../assets/img/women.jpg);
    background-size: cover;
  }

  &__men {
    background-image: url(../assets/img/men.jpg);
    background-size: cover;
  }

  &__kids {
    background-image: url(../assets/img/kids.jpg);
    background-size: cover;
  }
}
</style>
