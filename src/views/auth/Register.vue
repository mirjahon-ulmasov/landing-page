<template>
  <div class="login">
    <lottie-animation
      class="animation"
      :animation-data="animationUrl"
      :auto-play="true"
      :loop="true"
      :speed="1"
      ref="anim"
    />
    <div class="left">
      <img
        style="cursor: pointer"
        @click="$router.push({ name: 'main' })"
        src="@/assets/images/logo.svg"
        alt="logo"
      />
      <div class="social-media">
        <img src="@/assets/images/facebook.svg" alt="facebook" />
        <img src="@/assets/images/telegram.svg" alt="telegram" />
        <img src="@/assets/images/instagram.svg" alt="instagram" />
      </div>
    </div>
    <div class="container">
      <form action="">
        <h2>Регистрация</h2>
        <div class="form-input">
          <label>Имя</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label>Фамилия</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label>E-mail</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label>Пароль</label>
          <input type="password" />
        </div>
        <div class="form-input">
          <label>Повторите пароль</label>
          <input type="password" />
        </div>
        <div class="actions">
          <button>Отменить</button>
          <button>Зарегистрироваться</button>
        </div>
      </form>
      <RouterLink :to="{ name: 'login' }"
        >У Вас уже аккаунт? Перейдите в окно входа</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import animationUrl from "../../assets/animation-2.json";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/register.scss";
.login {
  justify-content: space-evenly;
  padding: 1em;

  .left {
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    .social-media {
      margin-top: 2rem;
    }
  }
  .container {
    form {
      .actions {
        button {
          &:first-child {
            border: 1px solid #54a399;
            background-color: transparent;
          }
          &:nth-child(2) {
            background: linear-gradient(
              90deg,
              rgb(30, 174, 222) 0%,
              rgba(84, 163, 153, 1) 70%,
              rgba(62, 203, 179, 1) 100%
            );
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .login {
    flex-direction: column;
    justify-content: center;
    .container {
      form {
        width: 90%;
        padding: 1em;
        margin: 1em auto;
        .form-input {
          margin: 1em 0;
        }
        .actions {
          margin: 1em 0;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>
