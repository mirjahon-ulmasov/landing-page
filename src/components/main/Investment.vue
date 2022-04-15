<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const width = ref(window.innerWidth);
const handleResize = (event: any) => {
  width.value = event.currentTarget.innerWidth;
};
</script>

<template>
  <section class="investment">
    <h1>Направления инвестиций</h1>
    <Carousel
      :items-to-show="Math.floor(width / 350)"
      :wrap-around="true"
      class="carousel"
    >
      <Slide v-for="i in 10" :key="i">
        <div class="carousel__item">
          <img src="@/assets/images/ai.jpg" alt="ai" />
          <h2>Ai</h2>
          <p>
            Искусственный интеллект (Ии; англ. artificial intelligence, Al) -
            свойство интеллектуальных систем выполнять творческие функции,
            которые традиционно считаются прерогативой человека
          </p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<style lang="scss" scoped>
.investment {
  padding: 5rem 0 5rem 5rem;
  min-height: 100vh;
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
        font-size: 1.5rem;
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
        font-size: 1em;
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
@media only screen and (max-width: 768px) {
  .investment {
    padding: 2rem 0 2rem 2rem;
  }
}
</style>
