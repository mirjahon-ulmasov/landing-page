<script setup lang="ts"></script>

<template>
  <section class="footer">
    <img src="@/assets/images/logo.svg" alt="logo" />
    <ul class="nav-links">
      <li>
        <a href="#">О Нас</a>
      </li>
      <li>
        <a href="#">Деятельность</a>
      </li>
      <li>
        <a href="#">Команда</a>
      </li>
      <li>
        <a href="#">Блог</a>
      </li>
      <li>
        <a href="#">Проекты</a>
      </li>
      <li>
        <a href="#">Партнеры</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Контакты</a>
      </li>
    </ul>
    <p>Все Права Защищены.</p>
    <div class="social-media">
      <img src="@/assets/images/facebook.svg" alt="facebook" />
      <img src="@/assets/images/telegram.svg" alt="telegram" />
      <img src="@/assets/images/instagram.svg" alt="instagram" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 2em 1em;
  background-color: #000;

  .nav-links {
    width: 70%;
    display: flex;
    margin: 2em auto 1em auto;
    justify-content: center;
    flex-wrap: wrap;

    li {
      display: inline-block;
      a {
        color: #fff;
        font-size: 0.8em;
        font-weight: 500;
        display: inline-block;
        padding: 1rem 0.5rem;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
  p {
    font-size: 0.8em;
    color: #bbb;
    text-transform: uppercase;
  }
  .social-media {
    margin-top: 2rem;
  }
}
@media only screen and (max-width: 768px) {
  .footer {
    min-height: 40vh;

    .nav-links {
      width: 100%;
      margin: 1rem auto;
    }
  }
}
</style>
