<script setup lang="ts"></script>

<template>
  <section class="blog">
    <div class="border">
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
            <img src="@/assets/images/it-park.png" alt="it-park" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/aloqabank.png" alt="aloqabank" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/uzvca.png" alt="uzvca" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/it-park.png" alt="it-park" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/mercury.png" alt="mercury" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/go-global.png" alt="go-global" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/most.png" alt="most" />
          </div>
          <div class="grid-item">
            <img src="@/assets/images/uzcard.png" alt="uzcard" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  padding: 0 3rem;
  min-height: 100vh;
  background-color: #000;
  border-top: 1px solid #0a6955;

  .border {
    padding: 5rem 7rem;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;
    .container {
      margin-bottom: 5rem;
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
            border: 1px solid #aaa;
          }
          .content {
            display: flex;
            height: 10rem;
            margin-top: 1rem;
            flex-direction: column;
            justify-content: space-between;
            h4 {
              color: #fff;
              font-size: 1.2em;
            }
            p {
              color: #aaa;
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
        grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));

        .grid-item {
          height: 10rem;
          display: flex;
          padding: 1rem;
          justify-content: center;
          background-color: #0e0e0e;
          img {
            max-width: 12rem;
            object-fit: contain;
          }
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
