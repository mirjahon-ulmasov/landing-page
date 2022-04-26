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
    <div class="border">
      <div class="container">
        <h1>Стартаперам</h1>
        <h4>Как это работает</h4>
        <img class="rotating" src="@/assets/images/back-1.png" alt="back" />
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
        <div class="actions">
          <button>Подать заявку</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.startup {
  position: relative;
  z-index: 2;
  overflow: hidden;
  min-height: 100vh;
  padding: 0 3em;
  display: flex;
  align-items: stretch;
  background-color: #000;
  border-top: 1px solid #0a6955;

  .border {
    flex-grow: 1;
    padding: 5em 2em 2em 2em;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .container {
      margin: 0 auto;
      max-width: 70rem;

      h4 {
        margin-top: 0.7em;
      }
      .rotating {
        z-index: 1;
        width: 55em;
        position: absolute;
        bottom: 0;
        right: -10em;
        animation: rotate 30s linear infinite;
      }
      .card-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        position: relative;
        justify-content: center;
        z-index: 2;
        .card-item {
          display: flex;
          min-width: 18rem;
          max-width: 18rem;
          height: 25rem;
          margin: 2em;
          padding: 2rem;
          border: 7px solid;
          border-image-slice: 1;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(2px);
          border-image-source: linear-gradient(
            212deg,
            #73f7b1 0%,
            #295db5 100%
          );

          h1 {
            font-size: 3.5em;
            font-weight: 700;
            text-align: right;
          }
        }
        .active {
          animation: animation 1s;
          background: linear-gradient(212deg, #73f7b1 0%, #295db5 100%);
        }
      }
      .actions {
        margin-top: 1rem;
        justify-content: center;
        button {
          z-index: 2;
          border: none;
          transition: 0.2s;
          &:first-child {
            background: linear-gradient(
              90deg,
              rgb(30, 174, 222) 0%,
              rgba(84, 163, 153, 1) 70%,
              rgba(62, 203, 179, 1) 100%
            );
          }
          &:hover {
            color: #000;
            background: #fff;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .startup {
    min-height: auto;
    padding: 2em;
    border: none;

    .border {
      padding: 0;
      border: none;

      .container {
        .rotating {
          display: none;
        }
        .card-list {
          align-items: center;
          flex-direction: column;
          .card-item {
            max-width: 30rem;
            width: 90%;
            height: 6rem;
            margin: 1em 0;
            flex-direction: row-reverse;
            align-items: center;

            h4 {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  .startup {
    padding: 2rem 1rem;
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
