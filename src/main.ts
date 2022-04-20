import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vue3-carousel/dist/carousel.css";
import "./assets/scss/main.scss";
import "./assets/css/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
