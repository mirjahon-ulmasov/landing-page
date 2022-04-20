<script setup lang="ts"></script>

<template>
  <section id="activity" class="activity">
    <div class="border">
      <div class="image" />
      <div class="content">
        <div class="part">
          <h1>Наша миссия</h1>
          <p>
            Мы инвестируем в инновационные стартапы, имеющие потенциал
            международного масштабирования.
          </p>
          <p>
            Мы поддерживаем тех, кто осмеливается изменить ситуацию. Мы
            сотрудничаем с основателями-новаторами, достаточно амбициозными для
            создания прорывных компаний. Мы помогаем нашим командам воплошать
            мечты, принося существенную пользу каждой компании.
          </p>
        </div>
        <div class="part">
          <h1>Наша цель</h1>
          <p>
            Мы инвестируем в инновационные стартапы, имеющие потенциал
            международного масштабирования.
          </p>
          <p>
            Мы поддерживаем тех, кто осмеливается изменить ситуацию. Мы
            сотрудничаем с основателями-новаторами, достаточно амбициозными для
            создания прорывных компаний. Мы помогаем нашим командам воплошать
            мечты, принося сущесТвенную пользу каждой компании.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.activity {
  padding: 0 3rem;
  min-height: 100vh;
  background-color: #000;
  align-items: stretch;
  display: flex;

  .border {
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;
    .image {
      z-index: 1;
      width: 50%;
      height: 40rem;
      margin-left: -5rem;
      border-radius: 1rem;
      background-image: url("../../assets/images/road.jpg");
    }

    .content {
      width: calc(50% + 10rem);
      color: #fff;
      padding: 0 3rem;
      line-height: 1.1;
      letter-spacing: normal;

      .part {
        margin: 4rem 0;
        h1 {
          &::after {
            content: " ";
            width: 10rem;
            display: block;
            margin: 1rem 0;
            border: 2px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(
              268deg,
              #73f7b1 0%,
              #295db5 100%
            );
          }
        }
        p {
          margin: 1rem 0;
          max-width: 35rem;
          font-size: 1em;
          font-weight: 300;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .activity {
    padding: 0 1rem;
    .border {
      .content {
        padding: 0 2rem;
        .part {
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>
