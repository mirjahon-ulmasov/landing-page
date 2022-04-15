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
    <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
    <div class="social-media">
      <img src="@/assets/images/facebook.svg" alt="facebook" />
      <img src="@/assets/images/telegram.svg" alt="telegram" />
      <img src="@/assets/images/instagram.svg" alt="instagram" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 50vh;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #000;

  .nav-links {
    width: 70%;
    display: flex;
    margin: 2rem auto;
    justify-content: center;
    flex-wrap: wrap;

    li {
      display: inline-block;
      a {
        color: #fff;
        font-size: 1em;
        font-weight: 500;
        display: inline-block;
        padding: 1rem 0.5rem;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
  p {
    font-size: 1em;
    color: #bbb;
  }
  .social-media {
    margin: 2rem;
    img {
      margin: 0.5rem;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .footer {
    min-height: 40vh;
    padding: 2rem 1rem;

    .nav-links {
      width: 100%;
      margin: 1rem auto;
    }
  }
}
</style>
