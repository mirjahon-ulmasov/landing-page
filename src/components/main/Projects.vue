<script setup lang="ts"></script>

<template>
  <section class="projects">
    <header>
      <h1>Проинвестированные проекты</h1>
      <p><a href="#">Все проекты</a></p>
    </header>
    <div class="card-list">
      <div class="card-item">
        <img src="@/assets/images/yandex.svg" alt="yandex" />
        <div class="content">
          <h4>Google</h4>
          <p>
            Google- американская транснациональная корпорация в составе холдинга
            Alphabet, инвестирующая в интернет- поиск, облачные вычисления и
            рекламные технологии. Google поддерживает и разрабатывает ряд
            интернет- сервисов и продуктов и получает прибыль в первую очередь
            от рекламы через свою программу
          </p>
        </div>
      </div>
      <div class="card-item">
        <img src="@/assets/images/yandex.svg" alt="yandex" />
        <div class="content">
          <h4>Yandex</h4>
          <p>
            «Яндекс» - транснациональная компания в отрасли информационных
            технологий, чьё головное юридическое лицо зарегистрировано в
            Нидерландах, владеющая одноимённой системой поиска в интернете,
            интернет- порталом и веб-службами в нескольких странах.
          </p>
        </div>
      </div>
      <div class="card-item">
        <img src="@/assets/images/yandex.svg" alt="yandex" />
        <div class="content">
          <h4>Yahoo!</h4>
          <p>
            Yahoo!- американская компания, владевшая второй по популярности в
            мире поисковой системой и предоставляющая ряд сервисов, объединенных
            интернет-порталом Yahoo! Directory; портал включает в себя
            популярный сервис электронной почты Yahoo! Mail, один из старейших и
            наиболее популярных в Интернете.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  min-height: 100vh;
  padding: 5rem 7rem;
  background-color: #fff;

  header {
    display: flex;
    max-width: 100%;
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

  .card-list {
    display: flex;
    margin-top: 5rem;
    flex-wrap: wrap;
    justify-content: center;

    .card-item {
      display: flex;
      height: 25rem;
      padding: 2rem;
      min-width: 20rem;
      max-width: 20rem;
      margin: 1rem;
      flex-direction: column;
      border-right: 2px solid #eee;

      img {
        width: 10rem;
      }
      .content {
        margin-top: 2rem;
        h4 {
          color: #000;
          font-weight: 700;
          font-size: 20px;
        }
        p {
          color: #000;
          font-size: 16px;
          margin-top: 1rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .projects {
    padding: 2rem;

    header {
      flex-direction: column;
      align-items: flex-start;
      h1 {
        margin-bottom: 1rem;
        font-size: 1.5em;
      }
    }
  }
}
</style>
