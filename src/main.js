import "./assets/main.css";
import axios from "axios";
import { config } from 'dotenv';

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

config();

axios.defaults.baseURL = process.env.AIRTABLE_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common.Authorization = `Bearer ${process.env.AIRTABLE_API_KEY}`;

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.mount("#app");
