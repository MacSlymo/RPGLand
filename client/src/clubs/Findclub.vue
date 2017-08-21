<template lang="html">
  <div class="container box big-vue">
    <h1 class="title-component">Find a club in the <router-link to="">List</router-link> or on the <router-link to="">Map</router-link> !</h1>

    <ul>The clubs
      <li v-for="club in clubs">
        <router-link
        :to="'/clubs/' + club._id">
        {{ club.name }}
        </router-link>
      </li>
    </ul>
    <br>
    <br>
  <!-- <div id="map-canvas"></div> -->
  </div>
</template>

<script>
// import googlemaps from "https://maps.googleapis.com/maps/api/js?key=AIzaSyBt-Uo7thZDjaiOx65s8BQmjBQX90xBsBs&sensor=false";
import axios from "axios";

const myAPI = axios.create({
  baseURL: "http://localhost:3000/api/"
});

export default {
  name: "clubs",
  props: ["clubs"],
  data() {
    return {
      msg: "WELCOME",
      clubs: null
    };
  },
  created() {
    this.getClubs().then(club => {
      this.club = club;
    });
  },
  methods: {
    getclub(clubId) {
      return myAPI.get("/clubs/" + clubId).then(response => {
        return response.data.name;
      });
    }

    // getClubs() {
    //   return myAPI.get("/clubs/").then(response => {
    //     return response.data;
    //   });
    // }
  }
};
</script>

<style lang="css">
/*#map-canvas {
      height: 600px;
      width: auto;
     }*/
</style>
