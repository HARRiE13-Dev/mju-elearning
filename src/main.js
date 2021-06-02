/*!

=========================================================
* Maejo University e-Learning Website Services
=========================================================

* Product Page : The Computer Science Divition at Maejo University
* Licensed under MIT : Argon Vue by Creative Tim
* Copyright 2021 by csmju.jowave.com
* Design and Development by HARR!E.13

=========================================================

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
