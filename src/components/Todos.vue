<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount, count } = storeToRefs(store)
// the increment action can just be destructured
const { increment,fetchRecords } = store
</script>

<template>
    <div id="app">
      <h1>Counter: {{ count }}</h1>
      <button @click="increment">Increment</button>
      <button @click="fetchRecords">fetchRecords</button>
    </div>
  </template>