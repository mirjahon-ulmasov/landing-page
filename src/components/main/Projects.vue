<script setup lang="ts"></script>

<template>
  <section class="projects">
    <header>
      <h1>Проинвестированные проекты</h1>
      <a href="#">Все проекты ></a>
    </header>
    <div class="card-list">
      <div class="card-item">
        <img src="@/assets/images/road.jpeg" alt="google" />
        <h4>Google</h4>
        <p>
          Google- американская транснациональная корпорация в составе холдинга
          Alphabet, инвестирующая в интернет- поиск, облачные вычисления и
          рекламные технологии. Google поддерживает и разрабатывает ряд
          интернет- сервисов и продуктов и получает прибыль в первую очередь от
          рекламы через свою программу
        </p>
      </div>
      <div class="card-item">
        <img src="@/assets/images/road.jpeg" alt="google" />
        <h4>Yandex</h4>
        <p>
          «Яндекс» - транснациональная компания в отрасли информационных
          технологий, чьё головное юридическое лицо зарегистрировано в
          Нидерландах, владеющая одноимённой системой поиска в интернете,
          интернет- порталом и веб-службами в нескольких странах.
        </p>
      </div>
      <div class="card-item">
        <img src="@/assets/images/road.jpeg" alt="google" />
        <h4>Yahoo!</h4>
        <p>
          Yahoo!- американская компания, владевшая второй по популярности в мире
          поисковой системой и предоставляющая ряд сервисов, объединенных
          интернет-порталом Yahoo! Directory; портал включает в себя популярный
          сервис электронной почты Yahoo! Mail, один из старейших и наиболее
          популярных в Интернете.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  padding: 5rem;
  background-color: #fff;
  border-top: 1px solid #222;

  .card-list {
    display: flex;
    margin-top: 1rem;
    justify-content: center;

    .card-item {
      display: flex;
      width: 18rem;
      height: 25rem;
      margin: 2rem;
      padding: 2rem;
      border: 7px solid;
      border-image-slice: 1;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
