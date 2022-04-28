<script setup lang="ts">
import Layout from "../components/ui/Layout.vue";
</script>

<template>
  <Layout>
    <template #body>
      <section class="vacancies">
        <h1>Вакансии</h1>
        <div class="card-list">
          <div v-for="num in 6" class="card-item">
            <h3>Специалист 1-категории</h3>
            <div class="part">
              <h4>Отдел</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nemo alias vero, minima nostrum sapiente?
              </p>
            </div>
            <div class="part">
              <h4>Должность</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nemo alias vero, minima nostrum sapiente?
              </p>
            </div>
            <div class="part">
              <h4>Условия</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nemo alias vero, minima nostrum sapiente?
              </p>
            </div>
            <div class="part">
              <h4>Квалификационные требования:</h4>
              <ul>
                <li>Высшее экономическое образование;</li>
                <li>Безупречное знание Интернета и компьютерных технологий;</li>
              </ul>
            </div>
            <div class="actions">
              <button type="button">Отправить резюме</button>
            </div>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
.vacancies {
  margin: 0 auto;
  max-width: 80rem;
  padding: 2rem 4rem;
  position: relative;

  .card-list {
    display: grid;
    grid-gap: 2em;
    margin: 3em auto;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    .card-item {
      padding: 2em;
      border-radius: 0.5rem;
      background-color: #171717;

      h3 {
        color: #eee;
        font-size: 1.2em;
        font-weight: 600;
      }
      .part {
        margin-top: 1em;
        position: relative;

        h4 {
          font-size: 1em;
          font-weight: 600;
          color: #009c97;
        }
        p,
        li {
          color: #ddd;
          font-size: 0.9em;
          line-height: 1.2;
          margin-top: 0.2em;
        }
      }
      .actions {
        margin-top: 1.5em;
        button {
          width: 100%;
          color: #009c97;
          transition: 0.2s;
          background: transparent;
          border: 1px solid #009c97;

          &:hover {
            color: #eee;
            background: #009c97;
            border: 1px solid #009c97;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 875px) {
  .vacancies {
    font-size: 13px;
    padding: 2rem;
    .card-list {
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
      .card-item {
        padding: 2em 1.5em;
      }
    }
  }
}

@media only screen and (max-width: 425px) {
  .vacancies {
    padding: 2rem 1.5rem;
    .card-list .card-item {
      padding: 1.5rem 1rem;
    }
  }
}
</style>
