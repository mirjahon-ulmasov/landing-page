<script setup lang="ts"></script>

<template>
  <section class="faq">
    <div class="container">
      <header>
        <h1>FAQ</h1>
        <p><a href="#">Все</a></p>
      </header>
      <p>Ответы на часто задаваемые вопросы</p>
      <div class="questions">
        <ul>
          <li>Какие бывают раунды привлечения инвестиций?</li>
          <li>Pre-Seed (Предварительный раунд)</li>
          <li>Seed (Посевной раунд)</li>
          <li>Какие бывают раунды привлечения инвестиций?</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  height: 100vh;
  display: flex;
  padding: 5rem 7rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;

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
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
        }
      }
    }
    p {
      color: #000;
      margin-top: 1rem;
      font-weight: 500;
      font-size: 16px;
    }
    .questions {
      ul {
        li {
          color: #000;
          font-weight: 600;
          padding: 1.5rem 0;
          border-bottom: 1px solid #333;
        }
      }
    }
  }
}
</style>
