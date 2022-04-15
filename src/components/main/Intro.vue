<script setup lang="ts"></script>

<template>
  <section class="intro">
    <div class="border">
      <nav class="navbar">
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
      </nav>

      <div class="hero">
        <h1>Не ждите, время никогда не будет подходящим</h1>
        <h4>
          Инвестиции и экспертиза для быстрорастущих технологических компаний
        </h4>
        <div class="actions">
          <button>Подать заявку</button>
          <button>Войти в кабинет</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  padding: 3rem 3rem 0 3rem;
  background-color: #000;

  .border {
    height: 100%;
    padding: 0 2rem;
    border-top: 1px solid #0e987a;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .navbar {
      width: 80%;
      display: flex;
      margin: -2.5rem auto;
      padding: 1rem 2rem;
      align-items: center;
      background-color: #000;
      justify-content: space-between;
      align-items: flex-start;

      .nav-links {
        width: 70%;
        display: flex;
        justify-content: flex-end;
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
    }
    .hero {
      max-width: 70rem;
      display: flex;
      line-height: 1.3;
      margin: 30vh auto;
      text-align: center;
      word-spacing: 4px;
      letter-spacing: 1px;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 2.5em;
      }
      h4 {
        max-width: 40rem;
      }
      .actions {
        margin-top: 2rem;
        button {
          color: #fff;
          font-size: 1em;
          font-weight: 500;
          margin: 0.5rem 1rem;
          border-radius: 5px;
          padding: 0.7rem 3rem;
          border: 1px solid #54a399;
          cursor: pointer;
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
