<script setup lang="ts">
import { ref } from "vue";

const active = ref(1);
const isActive = (id: number): boolean => {
  return active.value === id;
};
const setActive = (id: number): void => {
  active.value = id;
};
</script>

<template>
  <section class="startup">
    <h1>Стартаперам</h1>
    <h4>Как это работает</h4>
    <div class="card-list">
      <div
        class="card-item"
        :class="{ active: isActive(1) }"
        @mouseover="setActive(1)"
      >
        <h1>01</h1>
        <h4>Вы заполняете одну из форм заявок</h4>
      </div>
      <div
        class="card-item"
        :class="{ active: isActive(2) }"
        @mouseover="setActive(2)"
      >
        <h1>02</h1>
        <h4>Мы рассматриваем Вашу заявку</h4>
      </div>
      <div
        class="card-item"
        :class="{ active: isActive(3) }"
        @mouseover="setActive(3)"
      >
        <h1>03</h1>
        <h4>С Вами связывается наш Проектный Менеджер</h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.startup {
  min-height: 100vh;
  padding: 5rem 7rem;
  background-color: #000;
  border-top: 1px solid #222;
  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: center;
    .card-item {
      display: flex;
      min-width: 18rem;
      max-width: 18rem;
      height: 25rem;
      margin: 2rem;
      padding: 2rem;
      border: 7px solid;
      border-image-slice: 1;
      flex-direction: column;
      justify-content: space-between;
      border-image-source: linear-gradient(212deg, #73f7b1 0%, #295db5 100%);

      h1 {
        font-size: 3.5em;
        font-weight: 700;
        text-align: right;
      }
    }
    .active {
      background: linear-gradient(212deg, #73f7b1 0%, #295db5 100%);
      animation: animation 1s;
    }
  }
}
@media only screen and (max-width: 768px) {
  .startup {
    padding: 2rem;
    .card-list {
      display: flex;
      margin-top: 1rem;
      .card-item {
        min-width: 15rem;
        max-width: 15rem;
        height: 20rem;
        margin: 1rem;
      }
    }
  }
}
</style>
