<script>
import axios from 'axios';
import { useCounterStore } from '@/stores/counter';

export default {
    data: () => ({
        todo: '',
    }),
    methods: {
        submitForm() {
            if (this.todo.length > 0) {
                const store = useCounterStore();
                // old way
                // axios.post(
                //     'https://api.airtable.com/v0/app4GVG5QETa94mUJ/tblgBZNGKlwS0RygH',
                //     {
                //         "fields": {
                //             "Name": this.todo,
                //         },
                //     },
                //     {
                //         headers: {
                //             Authorization: `Bearer patR6qxROwtC6iFh6.73e5c0d694b44d0aebbdccd40e0acc44be65a899eff4c2e3a9408395756521ed`,
                //         },
                //     }
                // )
                console.log(this.todo)
                axios.post('http://localhost:3000/post', this.todo, {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                })
                    .then(response => {
                        console.log('API Response:', response.data);
                        // Handle the response as needed
                        // Call the fetchRecords method to update data in the Pinia store
                        store.fetchRecords();

                        // Clear the form
                        this.todo = '';
                    })
                    .catch(error => {
                        console.error('API Error:', error);
                        // Handle the error as needed
                    });
            }
        },
    },
};
</script>

<template>
    <v-sheet width="700" class="mx-auto">
        <v-form @submit.prevent="submitForm">
            <v-text-field v-model="todo" label="Thing to do"></v-text-field>
        </v-form>
    </v-sheet>
</template>
