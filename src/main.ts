import Vue from "vue";
import App from "./App.vue";
import VueNotifi from "./VueNotifi/index";

Vue.config.productionTip = false;

Vue.use(VueNotifi);

new Vue({
  render: h => h(App)
}).$mount("#app");
