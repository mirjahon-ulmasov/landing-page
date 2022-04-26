<script setup lang="ts">
import Layout from "../components/ui/Layout.vue";
</script>

<template>
  <Layout>
    <template #body>
      <section class="blogs">
        <div class="top">
          <h1>Блог</h1>
          <div class="tabs">
            <span class="active">Все</span>
            <span>Новости</span>
            <span>Статьи</span>
          </div>
        </div>
        <div class="card-list">
          <div v-for="num in 6" class="card-item">
            <img src="@/assets/images/blog.png" alt="blog" />
            <div class="content">
              <h4>
                Китайские хакеры использовали VLC для слежки за западными
                компаниями
              </h4>
              <p>12.04.2022</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                provident assumenda earum sapiente voluptatibus maiores incidunt
                odio laudantium facere accusamus!
              </p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
.blogs {
  margin: 0 auto;
  max-width: 70rem;
  padding: 2rem 4rem;
  position: relative;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      padding: 0.5em 2em;
      border-bottom: 2px solid #333;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(268deg, #73f7b1 0%, #295db5 100%);
    }
  }
  .card-list {
    display: grid;
    grid-gap: 2rem;
    margin: 3rem auto;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    .card-item {
      background-color: #000;
      overflow: hidden;

      img {
        width: 100%;
        height: 12rem;
        object-fit: cover;
        object-position: 50% 50%;
      }
      .content {
        height: 12rem;
        margin-top: 1rem;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          pointer-events: none;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgb(0, 0, 0) 90%
          );
          width: 100%;
          height: 5em;
        }
        h4 {
          margin-top: 1em;
          color: #fff;
          font-size: 1.2em;
        }
        p {
          margin-top: 1rem;
          color: #aaa;
          font-size: 1em;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .blogs {
    .card-list {
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    }
  }
}
</style>
