<script setup lang="ts">
import Navigation from "@/components/ui/Navigation.vue";
import animationUrl from "../../assets/animation-2.json";
import Footer from "../Footer.vue";
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <img
        style="cursor: pointer"
        @click="$router.push({ name: 'main' })"
        src="@/assets/images/logo.svg"
        alt="logo"
      />
      <nav class="navbar">
        <Navigation />
      </nav>
      <div class="lang">uz</div>
    </header>
    <main class="main">
      <lottie-animation
        class="animation"
        :animation-data="animationUrl"
        :auto-play="true"
        :loop="true"
        :speed="1"
        ref="anim"
      />
      <slot name="body"> </slot>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  background-color: #000;

  .header {
    position: relative;
    width: 100%;
    height: 6rem;
    display: flex;
    padding: 1rem 3rem 0 3rem;
    align-items: flex-start;
    justify-content: space-between;

    &:before {
      content: "";
      height: 50%;
      min-width: 4rem;
      margin-right: 1.5rem;
      align-self: flex-end;
      border-top: 1px solid #0e987aa3;
      border-left: 1px solid #0e987aa3;
    }

    &:after {
      content: "";
      flex-grow: 1;
      height: 50%;
      min-width: 4rem;
      margin-left: 1.5rem;
      align-self: flex-end;
      border-top: 1px solid #0e987aa3;
      border-right: 1px solid #0e987aa3;
    }

    .navbar {
      padding: 1.3em 0 0 2em;
    }
    .lang {
      z-index: 2;
      position: absolute;
      top: 2.5em;
      right: 2em;
      padding: 0.7em;
      font-size: 14px;
      text-transform: uppercase;
      background-color: #000;
      border: 1px solid #0e987a;
      cursor: pointer;
    }
  }

  .main {
    width: 100%;
    flex-grow: 1;
    position: relative;
    border-bottom: 1px solid #0e987a75;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 3rem;
      z-index: 2;
      top: 0;
      bottom: 0;
      border-left: 1px solid #0e987aa3;
    }

    &:after {
      left: unset;
      right: 3rem;
    }
    .animation {
      position: fixed;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 2rem 1rem 0 1rem;
  }
}
</style>
