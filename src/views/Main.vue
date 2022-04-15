<template>
  <main class="main">
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
import Intro from "@/components/main/Intro.vue";
import Activity from "@/components/main/Activity.vue";
import Investment from "@/components/main/Investment.vue";
import Startup from "@/components/main/Startup.vue";
import Projects from "@/components/main/Projects.vue";
import Blog from "@/components/main/Blog.vue";
import FAQ from "@/components/main/FAQ.vue";
import Team from "@/components/main/Team.vue";
import Contacts from "@/components/main/Contacts.vue";
import Footer from "@/components/main/Footer.vue";
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  min-height: calc(100vh - 6rem);
}
@media only screen and (max-width: 768px) {
  .main {
    font-size: 12px;
  }
}
</style>
