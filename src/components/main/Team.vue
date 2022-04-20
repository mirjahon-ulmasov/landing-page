<script setup lang="ts"></script>

<template>
  <section class="team">
    <header>
      <h1>Команда</h1>
      <p><a href="#">Смотреть вакансии</a></p>
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
      <div class="want-member">
        <h2>ХОЧУ B КОМАНДУ</h2>
        <p>Отправьте свое резюме чтобы стать частью команды</p>
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
  min-height: 100vh;
  padding: 5rem 7rem;
  background-color: #000;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      color: #fff;
    }
    p {
      z-index: 2;
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
    right: -10rem;
    animation: rotate 30s linear infinite;
  }
  .team-list {
    max-width: 70rem;
    margin: 3rem auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

    .team-member {
      z-index: 2;
      display: flex;
      max-width: 15rem;
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
      width: 15rem;
      height: 15rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 7px solid;
      border-image-slice: 1;
      backdrop-filter: blur(2px);
      border-image-source: linear-gradient(212deg, #73f7b1 0%, #295db5 100%);

      h2 {
        font-size: 1.4em;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .team {
    padding: 2rem;

    header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
