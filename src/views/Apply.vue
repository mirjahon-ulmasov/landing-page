<script setup lang="ts">
import Layout from "../components/ui/Layout.vue";
</script>

<template>
  <Layout>
    <template #body>
      <section class="apply">
        <div class="container light">
          <form action="">
            <h1>Подача заявки на вакансию</h1>
            <div class="rule">
              <h3>Специалист 1-категории</h3>
              <ul>
                <li>
                  <h4>Отдел</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam rerum doloremque nam, rem vel quas?
                  </p>
                </li>
                <li>
                  <h4>Должность</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam rerum doloremque nam, rem vel quas?
                  </p>
                </li>
                <li>
                  <h4>Условия</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti vero dolore quasi, unde minima mollitia corporis
                    iure! Molestias, totam amet.
                  </p>
                </li>
                <li>
                  <h4>Квалификационные требования:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio placeat, neque ipsa excepturi repellat harum magni vero
                    commodi pariatur voluptatum?
                  </p>
                </li>
              </ul>
            </div>
            <h2>О заявителе</h2>
            <div class="form-input">
              <label>ФИО заявителя</label>
              <input type="text" />
            </div>
            <div class="form-input">
              <label>Номер телефона</label>
              <input type="phone" />
            </div>
            <div class="form-input">
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div class="form-input">
              <label>Прикрепить CV</label>
              <input type="file" />
            </div>
            <div class="actions">
              <button>Отменить</button>
              <button>Отправить</button>
            </div>
          </form>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
.apply {
  margin: 0 auto;
  padding-top: 2rem;
  position: relative;
  .container {
    padding: 3em 6em;
    background-color: #262626d0;

    form {
      max-width: 40em;

      h1 {
        font-size: 1.6em;
      }
      .rule {
        padding: 2em;
        margin-top: 2em;
        border-radius: 1rem;
        border: 1px solid #a6a6a677;
        h3 {
          font-size: 1.3em;
          font-weight: 500;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          li {
            margin: 1rem 1rem 1rem 0;
            min-width: 10rem;
            max-width: 15rem;

            h4 {
              font-size: 1em;
              line-height: 1.3;
              font-weight: 500;
            }

            p {
              line-height: 1.3;
              font-size: 0.8em;
              font-weight: 300;
              margin-top: 0.5em;
            }
          }
        }
      }
      h2 {
        margin: 1.5em 0;
        font-size: 1.3em;

        &:after {
          content: "";
          display: block;
          width: 4em;
          height: 3px;
          margin-top: 0.5em;
          background-image: linear-gradient(268deg, #73f7b1 0%, #295db5 100%);
        }
      }

      .form-input {
        width: 100%;
        margin: 1.5em 0;

        input {
          width: 100%;
          padding: 0.7em 1em;
          color: #fff;
          font-size: 1em;
          margin-top: 0.7em;
          border-radius: 0.8em;
          background-color: #00000026;
          border: 1px solid rgba(255, 255, 255, 0.15);

          &:focus {
            outline: none;
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
        }
        /* input[type="file"] {
          visibility: hidden;
        } */
      }
      .actions {
        margin-top: 3em;
        justify-content: center;
        button {
          transition: 0.2s;
          border: 1px solid #54a399;
          &:first-child {
            background: transparent;
          }
          &:nth-child(2) {
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
            border: 1px solid #fff;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .apply .container {
    padding: 2rem;
  }
}

@media only screen and (max-width: 768px) {
  .apply .container form .rule {
    padding: 1em;
  }
}

@media only screen and (max-width: 425px) {
  .apply {
    .container {
      padding: 1rem;
      form {
        .rule ul li {
          margin: 0.5rem 0;
        }
        .actions {
          margin-top: 1em;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
