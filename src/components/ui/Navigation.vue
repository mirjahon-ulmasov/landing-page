<template>
  <ul class="nav-links">
    <li>
      <a href="#activity">О Нас</a>
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
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    display: inline-block;
    a {
      padding: 0.5em 1em;
      color: #fff;
      font-size: 0.8em;
      font-weight: 500;
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
</style>
