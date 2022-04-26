<script setup lang="ts">
import { ref } from "vue";

const active = ref(1);
const isActive = (id: number): boolean => {
  return active.value === id;
};
const setActive = (id: number): void => {
  active.value = id;
};

const getImageUrl = (name: string, type: string = "svg") => {
  return new URL(`../assets/images/${name}.${type}`, import.meta.url).href;
};
</script>

<template>
  <section class="investment">
    <div class="border">
      <div class="container">
        <h1>Направления инвестиций</h1>
        <div class="card-list">
          <div
            class="card-item"
            @mouseover="setActive(1)"
            :class="{ active: isActive(1) }"
          >
            <img
              :src="getImageUrl(isActive(1) ? 'ai-white' : 'ai', 'svg')"
              alt="ai"
            />
            <h2>Ai</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(2)"
            :class="{ active: isActive(2) }"
          >
            <img
              :src="
                getImageUrl(isActive(2) ? 'fintech-white' : 'fintech', 'svg')
              "
              alt="fintech"
            />
            <h2>FinTech</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(3)"
            :class="{ active: isActive(3) }"
          >
            <img
              :src="
                getImageUrl(
                  isActive(3) ? 'blockchain-white' : 'blockchain',
                  'svg'
                )
              "
              alt="blockchain"
            />
            <h2>Blockchain</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(4)"
            :class="{ active: isActive(4) }"
          >
            <img
              :src="
                getImageUrl(isActive(4) ? 'edutech-white' : 'edutech', 'svg')
              "
              alt="edutech"
            />
            <h2>EduTech</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(5)"
            :class="{ active: isActive(5) }"
          >
            <img
              :src="getImageUrl(isActive(5) ? 'ai-white' : 'ai', 'svg')"
              alt="ai"
            />
            <h2>Ai</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(6)"
            :class="{ active: isActive(6) }"
          >
            <img
              :src="
                getImageUrl(isActive(6) ? 'fintech-white' : 'fintech', 'svg')
              "
              alt="fintech"
            />
            <h2>FinTech</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(7)"
            :class="{ active: isActive(7) }"
          >
            <img
              :src="
                getImageUrl(
                  isActive(7) ? 'blockchain-white' : 'blockchain',
                  'svg'
                )
              "
              alt="blockchain"
            />
            <h2>Blockchain</h2>
          </div>
          <div
            class="card-item"
            @mouseover="setActive(8)"
            :class="{ active: isActive(8) }"
          >
            <img
              :src="
                getImageUrl(isActive(8) ? 'edutech-white' : 'edutech', 'svg')
              "
              alt="edutech"
            />
            <h2>EduTech</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.investment {
  position: relative;
  z-index: 2;
  padding: 0 3rem;
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  background-color: #000;

  .border {
    flex-grow: 1;
    padding: 2rem;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;

    .container {
      margin: 0 auto;
      max-width: 70rem;

      .card-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2em;
        justify-content: flex-start;

        .card-item {
          min-width: 15rem;
          max-width: 15rem;
          height: 17rem;
          display: flex;
          padding: 2rem;
          margin: 1em 1rem 1rem 0;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          border: 4px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(
            212deg,
            #73f7b1 0%,
            #295db5 100%
          );
          background-color: #000;

          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 1.2px;
          }
        }
        .active {
          background: linear-gradient(212deg, #73f7b1 0%, #295db5 100%);
          animation: animation 1s;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .investment {
    min-height: auto;
    padding: 0 1rem;

    .border {
      padding: 0;
      border: none;

      .container {
        .card-list {
          max-width: 40rem;
          margin: 2em auto;

          .card-item {
            margin: 1rem 0.5rem;
            min-width: 8rem;
            max-width: 8rem;
            height: 11rem;
            padding: 1rem;
            h2 {
              font-size: 1.2em;
            }
            img {
              transform: scale(0.6);
            }
          }
        }
      }
    }
  }
}
</style>
