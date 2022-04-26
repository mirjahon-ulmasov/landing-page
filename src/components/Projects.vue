<script setup lang="ts"></script>

<template>
  <section class="projects">
    <div class="border">
      <div class="container">
        <header>
          <h1>Проинвестированные проекты</h1>
          <p><a href="#">Все проекты</a></p>
        </header>
        <div class="card-list">
          <div class="card-item">
            <div class="content">
              <img src="@/assets/images/google.png" alt="google" />
              <h4>Google</h4>
              <p>
                Google- американская транснациональная корпорация в составе
                холдинга Alphabet, инвестирующая в интернет- поиск, облачные
                вычисления и рекламные технологии. Google поддерживает и
                разрабатывает ряд интернет- сервисов и продуктов и получает
                прибыль в первую очередь от рекламы через свою программу
              </p>
            </div>
            <p>Направление: <span>FinTech</span></p>
          </div>
          <div class="card-item">
            <div class="content">
              <img src="@/assets/images/yandex.png" alt="yandex" />
              <h4>Yandex</h4>
              <p>
                «Яндекс» - транснациональная компания в отрасли информационных
                технологий, чьё головное юридическое лицо зарегистрировано в
                Нидерландах, владеющая одноимённой системой поиска в интернете,
                интернет- порталом и веб-службами в нескольких странах.
              </p>
            </div>
            <p>Направление: <span>FinTech</span></p>
          </div>
          <div class="card-item">
            <div class="content">
              <img src="@/assets/images/yahoo.png" alt="yahoo" />
              <h4>Yahoo!</h4>
              <p>
                Yahoo!- американская компания, владевшая второй по популярности
                в мире поисковой системой и предоставляющая ряд сервисов,
                объединенных интернет-порталом Yahoo! Directory; портал включает
                в себя популярный сервис электронной почты Yahoo! Mail, один из
                старейших и наиболее популярных в Интернете.
              </p>
            </div>
            <p>Направление: <span>FinTech</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding: 0 3rem;
  display: flex;
  align-items: stretch;
  background-color: #000;

  .border {
    flex-grow: 1;
    padding: 5em 2em 2em 2em;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .container {
      margin: 0 auto;
      max-width: 70rem;

      header {
        display: flex;
        max-width: 100%;
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

      .card-list {
        display: flex;
        margin-top: 2em;
        flex-wrap: wrap;
        justify-content: center;

        .card-item {
          display: flex;
          padding: 2rem;
          min-width: 20rem;
          max-width: 20rem;
          margin: 1rem;
          height: 30rem;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #aaa;

          p {
            color: #eee;
            font-size: 16px;
            letter-spacing: 1px;
            font-weight: 300;
            margin-top: 1rem;

            span {
              font-weight: 500;
            }
          }

          .content {
            img {
              width: 10rem;
            }
            h4 {
              margin-top: 2em;
              color: #fff;
              font-weight: 700;
              font-size: 1.5em;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .projects {
    min-height: auto;
    padding: 2rem;
    /* need to add carousel */
    display: none;

    .border {
      padding: 0;
      border: none;

      .container {
        header {
          align-items: flex-start;
          flex-direction: column;
          h1 {
            font-size: 1.5em;
          }
          p {
            margin-top: 1em;
          }
        }
        .card-list {
          .card-item {
            height: 27rem;
            .content {
              h4 {
                margin-top: 1em;
              }
            }
          }
        }
      }
    }
  }
}
</style>
