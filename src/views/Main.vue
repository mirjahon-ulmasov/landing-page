<template>
  <main class="main">
    <lottie-animation
      class="animation"
      :animation-data="animationUrl"
      :auto-play="true"
      :loop="true"
      :speed="1"
      ref="anim"
    />
    <Intro />
    <Activity />
    <Investment />
    <Startup />
    <Projects />
    <Blog />
    <FAQ />
    <Team />
    <Contacts />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Intro from "@/components/Intro.vue";
import Activity from "@/components/Activity.vue";
import Investment from "@/components/Investment.vue";
import Startup from "@/components/Startup.vue";
import Projects from "@/components/Projects.vue";
import Blog from "@/components/Blog.vue";
import FAQ from "@/components/FAQ.vue";
import Team from "@/components/Team.vue";
import Contacts from "@/components/Contacts.vue";
import Footer from "@/components/Footer.vue";
import animationUrl from "../assets/animation-2.json";
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  background-color: #000;

  .animation {
    z-index: 1;
    position: fixed;
  }
}
@media only screen and (max-width: 1024px) {
  .main {
    font-size: 13px;
  }
}
</style>
