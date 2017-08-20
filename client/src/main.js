// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "bulma/css/bulma.css";
import router from "./router";
// import * as VueGoogleMaps from "vue2-google-maps";
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyCoIOATH0IFS9Pky6Dn32Tk_fPq_pdtgDE"
//   }
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
