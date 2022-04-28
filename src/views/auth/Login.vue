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
    <div class="container">
      <img
        style="cursor: pointer"
        @click="$router.push({ name: 'main' })"
        src="@/assets/images/logo.svg"
        alt="logo"
      />
      <form action="">
        <h2>Вход</h2>
        <div class="form-input">
          <label>Логин</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label>Пароль</label>
          <input type="password" />
        </div>
        <RouterLink to="forgot-password">Забыли пароль?</RouterLink>
        <div class="actions">
          <button>Войти</button>
        </div>
      </form>
      <RouterLink :to="{ name: 'register' }"
        >У Вас ещё нет аккаунта? Зарегистрируйтесь здесь</RouterLink
      >
      <div class="social-media">
        <img src="@/assets/images/facebook.svg" alt="facebook" />
        <img src="@/assets/images/telegram.svg" alt="telegram" />
        <img src="@/assets/images/instagram.svg" alt="instagram" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animationUrl from "../../assets/animation-2.json";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/register.scss";
.login {
  .container {
    form {
      .actions {
        button {
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

@media only screen and (max-width: 800px) {
  .login .container {
    & > img {
      transform: scale(0.7);
    }
    form {
      width: 90%;
      padding: 1em;
      margin: 1em auto;
      .form-input {
        margin: 1em 0;
      }
      .actions {
        margin: 1em 0;
      }
    }
  }
}
</style>
