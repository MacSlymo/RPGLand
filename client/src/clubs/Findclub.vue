<template lang="html">
  <div class="container box big-vue">
    <h1 class="title-component">Find a club on the <router-link to="">Map</router-link> or in the <router-link to="">List</router-link> !</h1>

    <h2>FIND YOUR CLUB ON THE MAP</h2>
    <h3>(scroll down for detailled list)</h3>
    <br>
    <gmap-map
      class="googleMap"
      :center="center"
      :zoom="8"
    >
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <a target="_blank" :href="selectedMarker ? selectedMarker.position.infoWebsite : nothing">
        {{ selectedMarker ? selectedMarker.position.infoName : nothing  }}
      </a>&nbsp;&nbsp;
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
    <br>
    <br>

    <h2>THE CLUBS</h2>
    <br>
    <ul>
      <li class="club" v-for="club in clubs">
        {{ club.name }}
        <br>
        <span>Email: {{ club.email }}</span>
        <br>
        <span>Phone: 0{{ club.tel }}</span>
        <br>
        (<a target="_blank" :href="club.website">Website</a>)
      </li>

    </ul>
    <br>
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
      selectedMarker: null,
      nothing: "",
      infoContent: null,
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
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = {
        infoName: marker.position.infoName,
        infoWebsite: marker.position.infoWebsite
      };
      this.selectedMarker = marker;
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
              infoName: response.data[i].name,
              infoWebsite: response.data[i].website
            }
          });
          this.clubs.push({
            name: response.data[i].name,
            website: response.data[i].website,
            email: response.data[i].email,
            tel: response.data[i].tel
          });
        }
      });
  }
};
</script>

<style lang="css">
.googleMap {
  width: 100%;
  height: 450px
}

.club {
  margin-bottom: 15px;
}

</style>
