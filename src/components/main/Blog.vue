<script setup lang="ts"></script>

<template>
  <section class="blog">
    <div class="container">
      <header>
        <h1>Блог</h1>
        <p><a href="#">Все</a></p>
      </header>
      <div class="card-list">
        <div class="card-item">
          <img src="@/assets/images/blog.png" alt="blog" />
          <div class="content">
            <h4>
              Китайские хакеры использовали VLC для слежки за западными
              компаниями
            </h4>
            <p>12.04.2022</p>
          </div>
        </div>
        <div class="card-item">
          <img src="@/assets/images/blog.png" alt="blog" />
          <div class="content">
            <h4>Dell тестирует в Нидерландах 4-дневную рабочую неделю</h4>
            <p>12.04.2022</p>
          </div>
        </div>
        <div class="card-item">
          <img src="@/assets/images/blog.png" alt="blog" />
          <div class="content">
            <h4>В солнечную энергетику Дагестана вложат 13 млрд рублей</h4>
            <p>12.04.2022</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Наши партнеры</h1>
      <div class="grid-list">
        <div class="grid-item">
          <img src="@/assets/images/it-park.svg" alt="it-park" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/aloqa.png" alt="aloqabank" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/uzvca.svg" alt="uzvca" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/it-park.svg" alt="it-park" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/mercury.svg" alt="mercury" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/go-global.svg" alt="go-global" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/most.svg" alt="most" />
        </div>
        <div class="grid-item">
          <img src="@/assets/images/uzcard.svg" alt="uzcard" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  min-height: 100vh;
  padding: 5rem 7rem;
  background-color: #fafafa;

  .container {
    margin-bottom: 5rem;
    h1 {
      font-weight: 700;
      color: #000;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      margin-top: 3rem;
      flex-wrap: wrap;
      justify-content: center;

      .card-item {
        display: flex;
        height: 22rem;
        min-width: 20rem;
        max-width: 20rem;
        margin: 1rem;
        flex-direction: column;

        img {
          width: 100%;
          height: 12rem;
          object-fit: cover;
          object-position: 50% 50%;
        }
        .content {
          display: flex;
          height: 10rem;
          margin-top: 1rem;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            color: #000;
            font-size: 1.25em;
            font-weight: 700;
          }
          p {
            color: #000;
            font-size: 1em;
          }
        }
      }
    }
    .grid-list {
      display: grid;
      grid-gap: 1rem;
      max-width: 60rem;
      margin: 2rem auto;
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

      .grid-item {
        height: 10rem;
        display: flex;
        justify-content: center;
        background-color: #fff;
        border: 1px solid #eee;
        img {
          height: auto;
          max-width: 10rem;
          object-fit: contain;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .blog {
    padding: 2rem;
    .container {
      margin-bottom: 2rem;
      .card-list {
        margin-top: 1rem;
        .card-item {
          height: 18rem;
        }
      }
      .grid-list {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        .grid-item {
          img {
            max-width: 8rem;
          }
        }
      }
    }
  }
}
</style>
