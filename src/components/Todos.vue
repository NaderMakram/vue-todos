<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { records } = storeToRefs(store)
const { fetchRecords, deleteRecord } = store
fetchRecords();
let logClickedItem = (record) => {
  console.log(record.id);
  deleteRecord(record.id);
}
</script>


<template>
  <v-card class="mx-auto" width="700">
    <v-list density="compact">

      <v-list-item v-for="(record, i) in records" :key="i" :value="record" color="primary">
        <!-- thi icon should be here -->
        <div class="icon" @click="logClickedItem(record)"></div>

        <v-list-item-title v-text="record.fields.Name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style>
div.icon {
  width: 15px;
  height: 15px;
  background: red;
  display: inline-block;
}

.v-list-item-title {
  display: inline-block;
  margin-left: 5px;
}
</style>