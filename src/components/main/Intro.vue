<script setup lang="ts"></script>

<template>
  <section class="intro">
    <div class="border">
      <nav class="navbar">
        <div class="logo">
          <h2>AloqaVentures <span>&reg;</span></h2>
        </div>
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
    border-top: 1px solid #0e987a;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .navbar {
      width: 80%;
      display: flex;
      margin: -1.8rem auto;
      padding: 1rem 2rem;
      align-items: center;
      background-color: #000;
      justify-content: space-between;

      .logo {
        h2 {
          background: transparent
            linear-gradient(180deg, #9de6a0 0%, #004a9e 100%) 0% 0% no-repeat
            padding-box;
          font-size: 26px;
          font-weight: 900;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          span {
            font-size: 14px;
          }
        }
      }
      .nav-links {
        width: 70%;
        display: flex;
        justify-content: space-evenly;

        li {
          a {
            color: #fff;
            font-size: 13px;
            font-weight: 500;
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
        font-size: 40px;
      }
      h4 {
        max-width: 40rem;
      }
      .actions {
        button {
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          margin: 2rem 1rem;
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
</style>
