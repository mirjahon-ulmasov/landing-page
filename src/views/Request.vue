<script setup lang="ts">
import Layout from "../components/ui/Layout.vue";
import Dropdown from "../components/ui/Dropdown.vue";

const getModel = (val: string) => {
  console.log(val);
};
</script>

<template>
  <Layout>
    <template #body>
      <section class="request">
        <div class="container light">
          <form action="">
            <h1>Форма заявки стартапа</h1>
            <h2>Общие данные</h2>
            <div class="row">
              <div class="form-input big">
                <label> Название стартапа </label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label> Прикрепить презентацию </label>
                <label class="fileInput">
                  <input type="file" />
                  <img src="@/assets/images/clip.svg" alt="clip" />
                </label>
              </div>
            </div>
            <div class="row">
              <div class="form-input full">
                <label> Описание стартапа</label>
                <textarea rows="7"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="form-input small">
                <label>Выберите направление</label>
                <Dropdown
                  :options="['Tashkent', 'Moscow', 'Dubai', 'New York']"
                  @input="getModel"
                />
              </div>
              <div class="form-input small">
                <label>Сколько людей в команде</label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label>Модель бизнеса стартапа</label>
                <Dropdown
                  :options="['Tashkent', 'Moscow', 'Dubai', 'New York']"
                  @input="getModel"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-input small">
                <label>Наличие продаж у стартапа</label>
                <Dropdown
                  :options="['Tashkent', 'Moscow', 'Dubai', 'New York']"
                  @input="getModel"
                />
              </div>
              <div class="form-input big">
                <label>Ссылка на продукт</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
        <div class="container dark">
          <form action="">
            <h2>О заявителе</h2>
            <div class="row">
              <div class="form-input big">
                <label>ФИО заявителя</label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label>Роль в команде</label>
                <input type="text" />
              </div>
            </div>
            <div class="row">
              <div class="form-input small">
                <label>Возраст</label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label>Номер телефона</label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label>Как долго вы работаете над проектом</label>
                <input type="text" />
              </div>
            </div>
            <div class="row">
              <div class="form-input small">
                <label>Telegram user</label>
                <input type="text" />
              </div>
              <div class="form-input small">
                <label>E-mail</label>
                <input type="email" />
              </div>
            </div>
          </form>
        </div>
        <div class="container light">
          <form action="">
            <h2>Детали проекта</h2>
            <div class="row">
              <div class="form-input full">
                <label>Какие ресурсы вам нужны для реализации проекта</label>
                <Dropdown
                  :options="['Tashkent', 'Moscow', 'Dubai', 'New York']"
                  @input="getModel"
                />
              </div>
            </div>
            <div class="row" style="align-items: flex-start">
              <div class="form-input big">
                <label>Опишите подробнее ваш запрос на ресурсы</label>
                <textarea rows="7"></textarea>
              </div>
              <div class="form-input small">
                <label>Откуда вы узнали про нас?</label>
                <Dropdown
                  :options="['Tashkent', 'Moscow', 'Dubai', 'New York']"
                  @input="getModel"
                />
              </div>
            </div>
          </form>
          <div class="actions">
            <button type="button">Отменить</button>
            <button type="submit">Отправить</button>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
.request {
  margin: 0 auto;
  padding-top: 2rem;
  position: relative;

  .light {
    background-color: #262626d0;
  }
  .dark {
    background-color: #1d1d1dd0;
  }
  .container {
    padding: 3em 6em;

    form {
      max-width: 70em;
      margin: 0 auto;

      h1 {
        font-size: 1.6em;
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

      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-end;

        .form-input {
          display: flex;
          min-width: 14em;
          margin: 1.5em 2em 1.5em 0;
          flex-direction: column;
          align-items: flex-start;

          input,
          textarea,
          .fileInput {
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
          .fileInput {
            cursor: pointer;
            padding: 0.55em 1em;
            input[type="file"] {
              display: none;
            }
            img {
              float: right;
            }
          }
        }
        .full {
          width: 94%;
        }
        .big {
          width: 62%;
        }
        .small {
          width: 29%;
        }
      }
    }
    .actions {
      margin-top: 1em;
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

@media only screen and (max-width: 1024px) {
  .request {
    .container {
      padding: 2rem 1.5rem;
      form {
        .row {
          .form-input {
            margin: 1rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .request {
    .container {
      form {
        .row {
          .form-input {
            margin: 1rem 0;
          }
          .big {
            width: 94%;
          }
          .small {
            width: 94%;
          }
        }
      }
    }
  }
}
</style>
