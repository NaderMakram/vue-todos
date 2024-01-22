<script setup>
import Todos from './components/Todos.vue'
import Form from './components/Form.vue'
</script>

<template>
  <main>
    <Form />
    <Todos />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    width: 100vw !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    place-items: center;
  }
}
</style>
