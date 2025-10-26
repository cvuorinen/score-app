import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBasketballBall,
  faCircleInfo,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBasketballBall, faGithub, faCircleInfo, faGear);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);

app.mount("#app");
