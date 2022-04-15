<script setup lang="ts"></script>

<template>
  <section class="faq">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="container">
      <header>
        <h1>FAQ</h1>
        <p><a href="#">Все</a></p>
      </header>
      <p>Ответы на часто задаваемые вопросы</p>
      <div class="questions">
        <ul>
          <li>
            Какие бывают раунды привлечения инвестиций?
            <img src="@/assets/images/plus.svg" alt="plus" />
          </li>
          <li>
            Pre-Seed (Предварительный раунд)
            <img src="@/assets/images/plus.svg" alt="plus" />
          </li>
          <li>
            Seed (Посевной раунд)
            <img src="@/assets/images/plus.svg" alt="plus" />
          </li>
          <li>
            Какие бывают раунды привлечения инвестиций?
            <img src="@/assets/images/plus.svg" alt="plus" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  min-height: 100vh;
  display: flex;
  position: relative;
  padding: 5rem 7rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  .logo {
    position: absolute;
    top: 5rem;
    left: 5rem;
  }

  .container {
    width: 50rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: 700;
        color: #000;
      }
      p {
        a {
          color: #000;
          font-size: 1.2em;
          font-weight: 800;
        }
      }
    }
    p {
      color: #000;
      margin-top: 1rem;
      font-weight: 500;
      font-size: 1.2em;
    }
    .questions {
      ul {
        li {
          display: flex;
          color: #000;
          font-weight: 600;
          padding: 1.5rem 0;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #333;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .faq {
    padding: 2rem;
    .logo {
      position: absolute;
      top: 2rem;
      left: 2rem;
    }
    .container {
      max-width: 100%;
      .questions {
        ul {
          li {
            padding: 1rem 0;
          }
        }
      }
    }
  }
}
</style>
