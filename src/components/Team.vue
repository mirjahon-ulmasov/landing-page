<script setup lang="ts"></script>

<template>
  <section class="team">
    <div class="border">
      <div class="container">
        <header>
          <h1>Команда</h1>
          <p>
            <RouterLink :to="{ name: 'vacancies' }"
              >Смотреть вакансии</RouterLink
            >
          </p>
        </header>
        <img class="rotating" src="@/assets/images/back-1.png" alt="back" />
        <div class="team-list">
          <div class="team-member">
            <img src="@/assets/images/girl.jpeg" alt="team member" />
            <h4>ТАИРОВА КАМИЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/boy.jpeg" alt="team member" />
            <h4>АБДУЛЛАЕВ АБДУЛЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/girl.jpeg" alt="team member" />
            <h4>ТАИРОВА КАМИЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/boy.jpeg" alt="team member" />
            <h4>АБДУЛЛАЕВ АБДУЛЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/girl.jpeg" alt="team member" />
            <h4>ТАИРОВА КАМИЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/boy.jpeg" alt="team member" />
            <h4>АБДУЛЛАЕВ АБДУЛЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div class="team-member">
            <img src="@/assets/images/girl.jpeg" alt="team member" />
            <h4>ТАИРОВА КАМИЛА</h4>
            <p>Проект Менеджер</p>
          </div>
          <div @click="$router.push({ name: 'apply' })" class="want-member">
            <h2>ХОЧУ B КОМАНДУ</h2>
            <p>Отправьте свое резюме чтобы стать частью команды</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  color: #ccc;
  font-size: 1em;
  margin-top: 1rem;
  line-height: 1.2;
}
.team {
  position: relative;
  overflow: hidden;
  z-index: 2;
  min-height: 100vh;
  padding: 0 3rem;
  display: flex;
  align-items: stretch;
  background-color: #000;

  .border {
    padding: 5rem 7rem;
    flex-grow: 1;
    border-left: 1px solid #0e987a;
    border-right: 1px solid #0e987a;
    .container {
      margin: 0 auto;
      max-width: 68rem;

      header {
        position: relative;
        align-items: center;
        display: flex;
        z-index: 2;
        justify-content: space-between;
        h1 {
          font-weight: 700;
          color: #fff;
          z-index: 2;
        }
        p {
          a {
            color: #fff;
            font-size: 1.2em;
            font-weight: 600;
          }
        }
      }
      .rotating {
        z-index: 1;
        width: 50em;
        position: absolute;
        top: -10rem;
        left: -10rem;
        opacity: 0.5;
      }
      .team-list {
        margin: 3rem auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .team-member {
          z-index: 2;
          display: flex;
          min-width: 15rem;
          max-width: 15rem;
          margin: 2em 2em 2em 0;
          flex-direction: column;
          img {
            width: 100%;
            height: 15rem;
            object-fit: cover;
          }
          h4 {
            margin-top: 1rem;
            font-size: 1.2em;
            font-weight: 600;
          }
        }
        .want-member {
          z-index: 2;
          min-width: 15rem;
          max-width: 15rem;
          height: 15rem;
          padding: 2rem;
          display: flex;
          margin-top: 2em;
          flex-direction: column;
          justify-content: center;
          border: 7px solid;
          border-image-slice: 1;
          backdrop-filter: blur(2px);
          border-image-source: linear-gradient(
            212deg,
            #73f7b1 0%,
            #295db5 100%
          );

          h2 {
            font-size: 1.4em;
            font-weight: 600;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .team {
    min-height: auto;
    padding: 3rem 1rem;

    .border {
      padding: 0;
      border: none;
      .container {
        header {
          flex-direction: column;
          align-items: flex-start;
        }

        .team-list {
          max-width: 40rem;
          margin: 1rem auto;

          .team-member {
            min-width: 8rem;
            max-width: 8rem;
            height: auto;
            margin: 0.5em;
            img {
              height: 10rem;
            }
          }
          .want-member {
            min-width: 8rem;
            max-width: 8rem;
            height: 10rem;
            padding: 0.5rem;
            margin: 0.5em;
          }
        }
      }
    }
  }
}
</style>
