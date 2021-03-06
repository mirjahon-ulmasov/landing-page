<script setup lang="ts">
import Navigation from "@/components/ui/Navigation.vue";
import { Carousel, Slide } from "vue3-carousel";
import imgUrl from "../assets/images/intro.png";
import { ref } from "vue";

const menu = ref(false);
</script>

<template>
  <section class="intro">
    <div class="border">
      <div class="lang">uz</div>
      <header class="header">
        <img
          src="@/assets/images/menu.svg"
          @click="menu = !menu"
          class="menu-btn"
          alt="menu"
        />
        <img src="@/assets/images/logo.svg" class="logo" alt="logo" />
        <div class="actions">
          <button @click="$router.push('/apply')">Подать заявку</button>
          <button @click="$router.push('/login')">
            <img src="@/assets/images/user.svg" alt="user" />
            Войти в кабинет
          </button>
        </div>
      </header>
      <nav class="navbar">
        <Navigation />
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
    <div v-show="menu" class="menu">
      <img
        src="@/assets/images/close.svg"
        @click="menu = !menu"
        class="menu-btn"
        alt="menu"
      />
      <div class="lang">uz</div>
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
      <div class="actions">
        <button @click="$router.push('/apply')">Подать заявку</button>
        <button @click="$router.push('/login')">
          <img src="@/assets/images/user.svg" alt="user" />
          Войти в кабинет
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/menu.scss";

.intro {
  height: 100vh;
  padding: 3em 3em 0 3em;
  background-color: #000;
  .menu-btn {
    display: none;
    top: 1.2rem;
    left: 0.6rem;
    cursor: pointer;
    position: absolute;
  }

  .actions {
    button {
      z-index: 2;
      transition: 0.2s;
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
        background: #000;
      }
      &:hover {
        color: #000;
        background: #fff;
        border: 1px solid transparent;
      }
    }
  }
  .border {
    height: 100%;
    padding: 0 2em;
    position: relative;
    border-top: 1px solid #0e987a;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;
    .lang {
      z-index: 2;
      top: -1.5em;
      right: -1.5em;
    }

    .header {
      width: 90%;
      z-index: 2;
      display: flex;
      padding: 1rem 2rem;
      position: static;
      margin: -2.5rem auto;
      background-color: #000;
      align-items: flex-start;
      justify-content: space-between;

      .menu-btn {
        z-index: 1;
      }
    }

    .navbar {
      z-index: 2;
      width: 93%;
      position: relative;
      margin: 2.5em auto;
      padding: 0.5em 2em;
    }
    .carousel {
      z-index: 2;
      margin: 2em 0;
      .carousel__item {
        width: 90%;
        display: flex;
        height: 27rem;
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
            width: 40rem;
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

@media only screen and (max-width: 1024px) {
  .intro {
    height: auto;
    padding: 3em 1em 0 1em;
    .menu-btn {
      display: block;
    }
    .border {
      border: none;
      padding: 0;
      .lang {
        display: none;
      }
      .header {
        width: 100%;
        padding-top: 3rem;
        justify-content: center;

        .actions {
          display: none;
        }
      }
      .navbar {
        display: none;
        .nav-links {
          display: none;
        }
      }
      .carousel {
        z-index: 2;
        margin: 2em 0;
        .carousel__item {
          width: 100%;
          .hero {
            padding: 1rem;
            max-width: 100%;
            h1 {
              font-size: 2em;
            }
            h4 {
              max-width: 40rem;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 425px) {
  .intro .border {
    .header .logo {
      transform: scale(0.7);
    }
    .carousel .carousel__item .hero h1 {
      font-size: 1.5em;
    }
  }
}
</style>
