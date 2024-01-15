<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount, records } = storeToRefs(store)
// the increment action can just be destructured
const { increment,fetchRecords } = store
</script>

<template>
    <div id="app">
      <button @click="fetchRecords">fetchRecords</button>
      <ul>
      <li v-for="record in records" :key="record.id">{{ record.fields.Name }}</li>
    </ul>
    </div>
  </template>