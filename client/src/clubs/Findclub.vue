<template lang="html">
  <div class="container box big-vue">
    <h1 class="title-component">Find a club in the <router-link to="">List</router-link> or on the <router-link to="">Map</router-link> !</h1>

    <h2>THE LIST</h2>
    <br>
    <ul>
      <li v-for="club in clubs">
        <router-link
        :to="'/clubs/' + club._id">
        {{ club.name }}
        </router-link>
      </li>
    </ul>
    <br>
    <br>

    <h2>THE MAP</h2>
    <br>
    <gmap-map
      :center="center"
      :zoom="8"
      style="width: 500px; height: 300px"
    >
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      {{infoContent}}
    </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(m,index)"
      ></gmap-marker>
    </gmap-map>

    </map>
  <!-- <div id="map-canvas"></div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "findclub",
  data() {
    return {
      clubs: [],
      markers: [],
      infoContent: "",
      infoWinOpen: false,
      center: { lat: 48.860468, lng: 2.347653 },
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      this.center = marker.position;
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  },
  created() {
    axios
      .get(
        (process.env.NODE_ENV === "production"
          ? "/api"
          : "http://localhost:3000/api") + "/clubs",
        {}
      )
      .then(response => {
        this.markers = [];
        this.clubs = [];
        for (var i = 0; i < response.data.length; i++) {
          this.markers.push({
            position: {
              lat: response.data[i].coordinates.latitude,
              lng: response.data[i].coordinates.longitude,
              infoText: response.data[i].name
            }
          });
          this.clubs.push({
            name: response.data[i].name
          });
        }
      });
  }
};

// name: "clubs",
// props: ["clubs"],
// data() {
//   return {
//     msg: "WELCOME",
//     clubs: null
//   };
// },
// created() {
//   this.getClubs().then(club => {
//     this.club = club;
//   });
// },
// methods: {
//   getclub(clubId) {
//     return myAPI.get("/clubs/" + clubId).then(response => {
//       return response.data.name;
//     });

// getClubs() {
//   return myAPI.get("/clubs/").then(response => {
//     return response.data;
//   });
// }
</script>

<style lang="css">
/*#map-canvas {
      height: 600px;
      width: auto;
     }*/
</style>
