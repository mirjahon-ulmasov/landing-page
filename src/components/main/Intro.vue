<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import imgUrl from "../../assets/images/intro.png";
</script>

<template>
  <section class="intro">
    <div class="border">
      <div class="lang">uz</div>
      <header class="header">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <div class="actions">
          <button>
            <img src="@/assets/images/message.svg" alt="message" />
            Подать заявку
          </button>
          <button>
            <img src="@/assets/images/user.svg" alt="user" />
            Войти в кабинет
          </button>
        </div>
      </header>
      <nav class="navbar">
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
      </nav>

      <Carousel :items-to-show="1" :wrap-around="true" class="carousel">
        <Slide v-for="i in 5" :key="i">
          <div
            :style="{
              background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${imgUrl})`,
            }"
            class="carousel__item"
          >
            <div class="hero">
              <h1>Не ждите, время никогда не будет подходящим</h1>
              <h4>
                Инвестиции и экспертиза для быстрорастущих технологических
                компаний
              </h4>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  padding: 3rem 3rem 0 3rem;
  background-color: #000;

  .border {
    position: relative;
    height: 100%;
    padding: 0 2rem;
    border-top: 1px solid #0e987a;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .lang {
      position: absolute;
      top: -1.3em;
      right: -1.5em;
      padding: 0.7em;
      font-size: 16px;
      text-transform: uppercase;
      background-color: #000;
      border: 1px solid #0e987a;
    }

    .header {
      width: 90%;
      display: flex;
      margin: -2.5rem auto;
      padding: 1rem 2rem;
      background-color: #000;
      align-items: flex-start;
      justify-content: space-between;

      .actions {
        button {
          border: 1px solid #54a399;
          &:first-child {
            background: linear-gradient(
              90deg,
              rgb(30, 174, 222) 0%,
              rgba(84, 163, 153, 1) 70%,
              rgba(62, 203, 179, 1) 100%
            );
          }
          &:nth-child(2) {
            transition: 0.2s;
            background: transparent;
          }
          &:hover {
            color: #000;
            background: #fff;
            border: 1px solid transparent;
          }
        }
      }
    }

    .navbar {
      width: 90%;
      margin: 2.5em auto;
      padding: 0.5em 2em;
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
    }

    .carousel {
      margin-top: 5rem;
      .carousel__item {
        width: 90%;
        display: flex;
        height: 30rem;
        background-size: cover;
        justify-content: flex-end;
        align-items: center;
        background-position: center;
        background-repeat: no-repeat;

        .hero {
          display: flex;
          max-width: 50rem;
          line-height: 1.3;
          text-align: center;
          word-spacing: 4px;
          letter-spacing: 1px;
          text-align: left;
          align-items: flex-start;
          flex-direction: column;
          h1 {
            font-size: 2.5em;
          }
          h4 {
            max-width: 40rem;
          }
        }
      }
      .carousel__slide {
        padding: 10px;
      }
      .carousel__prev,
      .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .intro {
    padding: 2rem 1rem 0 1rem;
    .border {
      padding: 0 1rem;
      .navbar {
        width: 100%;
        justify-content: center;
        .nav-links {
          display: none;
        }
      }
    }
  }
}
</style>
