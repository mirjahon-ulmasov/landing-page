<script setup lang="ts"></script>

<template>
  <section class="contacts">
    <div class="map"></div>
    <div class="info">
      <div class="top">
        <h2>Контакты</h2>
        <p>улица Алишера Навои Ташкент, Узбекистан</p>
      </div>
      <div class="bottom">
        <h4>+998 71 123 45 67</h4>
        <h4>Info@aloqaventures.uz</h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  min-height: 70vh;
  position: relative;
  background-color: rgb(22, 22, 22);

  .info {
    position: absolute;
    left: 10vw;
    top: 10vh;
    width: 20rem;
    height: 20rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: #33333370;
    justify-content: space-between;

    .top {
      h2 {
        font-size: 2em;
        font-weight: 600;
      }
      p {
        color: #ccc;
        font-size: 1.2em;
        margin-top: 1rem;
        line-height: 1.2;
      }
    }
    .bottom {
      h4 {
        font-weight: 600;
        font-size: 1.3em;
        letter-spacing: 0.7px;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .contacts {
    min-height: 50vh;
    .info {
      width: 17rem;
      height: 17rem;
      top: 5vh;
      left: calc((100% - 17rem) / 2);
    }
  }
}
</style>
