<script setup lang="ts">
import { computed } from "vue";
import { Carousel, Slide } from "vue3-carousel";
const width = computed(() => window.innerWidth);
</script>

<template>
  <section class="investment">
    <h1>Направления инвестиций</h1>
    <Carousel
      :items-to-show="width > 1280 ? 4 : 3"
      :wrap-around="true"
      class="carousel"
    >
      <Slide v-for="i in 10" :key="i">
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>Ai</h2>
          <p>
            Искусственный интеллект (Ии; англ. artificial intelligence, Al) -
            свойство интеллектуальных систем выполнять творческие функции,
            которые традиционно считаются прерогативой человека
          </p>
        </div>
      </Slide>

      <!-- <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>FinTech</h2>
          <p>
            Финансовые технологии или финтех (англ. FinTech) - отрасль,
            состоящая из компаний, использующих технологии и инновации, чтобы
            конкурировать с традиционными финансовыми организациями в лице
            банков и посредников на рынке финансовых услуг.
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>Blockchain</h2>
          <p>
            Блокчёйн (англ. blockchain|], изначально block chain[2] — цепь из
            блоков) - выстроенная по определённым правилам непрерывная
            последовательная цепочка блоков (связный список), содержащих
            информацию.
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>EduTech</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>Ai</h2>
          <p>
            Искусственный интеллект (Ии; англ. artificial intelligence, Al) -
            свойство интеллектуальных систем выполнять творческие функции,
            которые традиционно считаются прерогативой человека
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>FinTech</h2>
          <p>
            Финансовые технологии или финтех (англ. FinTech) - отрасль,
            состоящая из компаний, использующих технологии и инновации, чтобы
            конкурировать с традиционными финансовыми организациями в лице
            банков и посредников на рынке финансовых услуг.
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>Blockchain</h2>
          <p>
            Блокчёйн (англ. blockchain|], изначально block chain[2] — цепь из
            блоков) - выстроенная по определённым правилам непрерывная
            последовательная цепочка блоков (связный список), содержащих
            информацию.
          </p>
        </div>
      </Slide>

      <Slide>
        <div class="carousel__item">
          <img src="@/assets/images/road.jpeg" alt="road" />
          <h2>EduTech</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </p>
        </div>
      </Slide> -->
    </Carousel>
  </section>
</template>

<style lang="scss" scoped>
.investment {
  padding: 5rem 0 5rem 5rem;
  height: 100vh;
  background-color: #000;

  .carousel {
    margin: 2rem 0;
    .carousel__item {
      text-align: left;
      margin-right: 5rem;

      img {
        width: 100%;
        border: 1px solid #cccccc85;
      }
      h2 {
        font-size: 24px;
        font-weight: 600;
        margin-top: 1rem;
        letter-spacing: 1.2px;

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
        color: #eee;
        font-size: 15px;
        font-weight: 300;
      }
    }

    .carousel__slide {
      padding: 10px;
    }
    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;
      border: 5px solid white;
    }
  }
}
</style>
