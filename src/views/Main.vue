<template>
  <main class="main">
    <Intro />
    <Activity />
    <Investment />
    <Startup />
    <Projects />
  </main>
</template>

<script setup lang="ts">
import Intro from "@/components/main/Intro.vue";
import Activity from "@/components/main/Activity.vue";
import Investment from "@/components/main/Investment.vue";
import Startup from "@/components/main/Startup.vue";
import Projects from "@/components/main/Projects.vue";
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  min-height: calc(100vh - 6rem);
}
</style>
