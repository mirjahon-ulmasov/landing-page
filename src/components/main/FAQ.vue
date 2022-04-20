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
      width: 50rem;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          a {
            color: #fff;
            font-size: 1em;
            font-weight: 500;
          }
        }
      }
      p {
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

@media only screen and (max-width: 768px) {
  .faq {
    padding: 1rem;
    .boder {
      .logo {
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
}
</style>
