<template>
  <div class="dropdown" @blur="isOpen = false">
    <div class="dropdown-input" @click="isOpen = !isOpen">
      {{ selected }}
      <img
        :src="getImageUrl(isOpen ? 'arrow-up' : 'arrow-down', 'svg')"
        alt="icon"
      />
    </div>
    <div class="dropdown-content" v-if="isOpen">
      <ul>
        <li
          v-for="(option, i) in options"
          :key="i"
          @click="
            selected = option;
            isOpen = false;
            $emit('input', option);
          "
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{ options: string[] }>();
const emit = defineEmits<{ (e: "input", value: string): void }>();

let isOpen = ref(false);
let selected = ref(props.options[0]);

const getImageUrl = (name: string, type: string = "svg") => {
  return new URL(`../../assets/images/${name}.${type}`, import.meta.url).href;
};

onMounted(() => {
  emit("input", selected.value);
});
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  cursor: pointer;
  position: relative;
  .dropdown-input {
    padding: 0.8em 1em;
    color: #fff;
    font-size: 1em;
    margin-top: 0.7em;
    border-radius: 0.8em;
    background-color: #00000026;
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    img {
      margin-top: 0.2rem;
      float: right;
    }
  }

  .dropdown-content {
    position: absolute;
    top: 4em;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 0.8em 1em;
    border-radius: 0.8em;
    background-color: #1b1b1b;
    border: 1px solid rgba(255, 255, 255, 0.15);
    ul {
      li {
        margin: 0.8em 0;
        list-style: none;
        font-weight: 400;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
