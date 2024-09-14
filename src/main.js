import { createApp } from "vue";

// import "@/locales/i18n.js";
import App from "./App.vue";
// import store from "@/store//index.js";
import router from "@/router/index.js";
// import VueI18n from "vue-i18n";
import commons from "@/plugins/commons";
import "@/style.css";

createApp(App)
  .use(router)
  // .use(VueI18n)
  .use(commons)
  .mount("#app");
