<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 class="text-2xl font-bold">{{ msg }}</h1>

  <h2 class="text-xl">Vue 3
    <font-awesome-icon :icon="['fab', 'vuejs']"/>
    + Vite
    <font-awesome-icon :icon="['fas', 'bolt']"/>
    + TailwindCSS
    <font-awesome-icon :icon="['fab', 'css3-alt']"/>
    + Font Awesome
    <font-awesome-icon :icon="['fab', 'font-awesome-flag']"/>
  </h2>

  <p class="pt-3">
    Recommended IDE:
    <a class="text-green-500 hover:text-green-700" href="https://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>
  </p>

  <p>
    <a class="text-green-500 hover:text-green-700" href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a class="text-green-500 hover:text-green-700" href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    |
    <a class="text-green-500 hover:text-green-700" href="https://tailwindcss.com/docs" target="_blank">TailwindCSS Documentation</a>
    |
    <a class="text-green-500 hover:text-green-700" href="https://fontawesome.com/docs" target="_blank">Font Awesome Documentation</a>
  </p>

  <div class="pt-2">
    <button class="py-2 px-4 font-semibold shadow-md text-white bg-green-500 hover:bg-green-700" type="button" @click="count++"><span class="font-mono">count</span> is: {{ count }}</button>
  </div>

  <p class="pt-2">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>

</style>
