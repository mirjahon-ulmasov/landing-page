<script setup lang="ts"></script>

<template>
  <section class="faq">
    <div class="border">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div class="container">
        <header>
          <h1>FAQ</h1>
          <p><a href="#">Все</a></p>
        </header>
        <p class="sub">Ответы на часто задаваемые вопросы</p>
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  padding: 0 3rem;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #0e0e0e;

  .border {
    padding: 2rem;
    display: flex;
    flex-grow: 1;
    position: relative;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .logo {
      position: absolute;
      top: 5rem;
      left: 5rem;
    }

    .container {
      width: 50%;
      z-index: 2;
      position: relative;
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          a {
            color: #fff;
            font-size: 1.2em;
            font-weight: 500;
          }
        }
      }
      .sub {
        color: #ccc;
        margin-top: 1rem;
        font-size: 1.1em;
      }
      .questions {
        ul {
          li {
            display: flex;
            color: #fff;
            font-weight: 500;
            padding: 1.5rem 0;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #333;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .faq {
    padding: 3rem 2rem;
    min-height: auto;

    .border {
      padding: 0;
      border: none;

      .logo {
        display: none;
      }

      .container {
        max-width: 30rem;
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 320px) {
  .faq {
    padding: 3rem 1rem;
  }
}
</style>
