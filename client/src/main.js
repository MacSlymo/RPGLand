// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "bulma/css/bulma.css";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: "AIzaSyBt-Uo7thZDjaiOx65s8BQmjBQX90xBsBs",
    libraries: "clubs"
  }
});
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
function startMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: parachuting
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const user_location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        map.setCenter(user_location);
      },
      function() {
        console.log("Error in the geolocation service.");
      }
    );
  } else {
    console.log("Browser does not support geolocation.");
  }
}
