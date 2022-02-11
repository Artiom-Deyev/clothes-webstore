<template>
  <section class="feedback">
    <h2 class="hidden">Feedback</h2>
    <div class="wrap feedback__wrap">
      <div class="feedback__comment">
        <img
          src="../assets/img/feedback-img.png"
          alt="feedback"
          class="feedback__comment__clients"
        />
        <p class="feedback__comment__text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,<span
            class="feedback__comment__text-italic"
          >
            a pulvinar purus condimentum“</span
          >
        </p>
      </div>

      <div class="feedback__subscribe">
        <div class="feedback__subscribe__text">
          <p>
            <span class="feedback__subscribe__text-big">SUBSCRIBE </span> <br />
            <span class="feedback__subscribe__text-small"
              >FOR OUR NEWLETTER AND PROMOTION</span
            >
          </p>
        </div>
        <form action="#" style="display: flex" class="feedback__form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            class="feedback__subscribe__inputarea"
            v-model="email"
          />
          <button
            type="submit"
            value="Subscribe"
            class="feedback__subscribe__submit animation-large"
            v-on:click="onSubmit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSubmit() {
      alert(`Thank you for submitting your email: '${this.email}`);
    },
  },
};
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}

.feedback {
  background-image: url(../assets/img/subscribe.jpg);
  background-size: cover;

  &__wrap {
    display: flex;
    justify-content: space-between;
  }

  &__comment {
    display: flex;
    flex-direction: column;
    max-width: 359px;
    margin-top: 97px;
    margin-bottom: 127px;

    &__clients {
      align-self: center;
    }

    &__text {
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #222224;

      &-italic {
        font-style: italic;
      }
    }
  }

  &__subscribe {
    width: 557px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__text {
      text-align: center;

      &-big {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 167.2%;
        text-align: center;
        color: #222224;
      }

      &-small {
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        color: #222224;
      }
    }

    &__inputarea {
      background: #e1e1e1;
      border-radius: 25px 0px 0px 25px;
      padding: 22px 122px 22px 32px;
      border: none;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #222224;
      opacity: 0.67;
    }

    &__submit {
      display: inline-block;
      vertical-align: top;
      background: #f16d7f;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      border-radius: 0px 25px 25px 0px;
      padding-left: 36px;
      padding-right: 36px;
      border: none;
    }
  }
}
</style>
