<template lang="html">
  <div class="container box big-vue">

    <h1 class="title-component">Create your Club !</h1>
    <h4>(all fields marked with a "<i class="fa fa-check"></i>" are mandatory)</h4>
    <br>

    <article v-if="error" class="message is-danger">
      <div class="message-body">{{ error }}</div>
    </article>

    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="name" type="text" placeholder="My Awesome Club">
        <span class="icon is-small is-left">
          <i class="fa fa-home" aria-hidden="true"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-success">This username is available</p> -->
    </div>

    <div class="field">
      <label class="label">Website</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="website" type="text" placeholder="http://www.myawesomeclub.fr/">
        <span class="icon is-small is-left">
          <i class="fa fa-globe" aria-hidden="true"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-success">This username is available</p> -->
    </div>

    <div class="field">
      <label class="label">Address</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="addressLineOne" type="text" placeholder="Address Line 1">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="addressLineTwo" type="text" placeholder="Address Line 2 (optional)">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input"  v-model="city"type="text" placeholder="City">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="state" type="text" placeholder="State">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="postcode" type="text" placeholder="Post Code">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="country" type="text" placeholder="Country">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>
    <br>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="email" type="text" placeholder="best.club@gmail.com">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <div class="field">
      <label class="label">Phone Number</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="tel" type="text" placeholder="0675263594">
        <span class="icon is-small is-left">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <div class="field">
      <div class="label">
        <button @click="submitNewClub" class="button is-primary">Submit</button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import clubsAPI from "./api";

export default {
  name: "newclub",
  data() {
    return {
      clubs: [],
      error: "",
      name: "",
      website: "",
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      latitude: "",
      longitude: "",
      email: "",
      tel: ""
    };
  },
  methods: {
    submitNewClub() {
      this.error = "";
      let mapG = new google.maps.Geocoder();
      let resTmp = mapG.geocode(
        {
          address: this.addressLineOne + " " + this.city + " " + this.postcode,
          region: "FR"
        },
        (results, status) => {
          let latitude = results[0].geometry.location.lat();
          let longitude = results[0].geometry.location.lng();
          console.log(latitude, longitude);
          clubsAPI
            .submitNewClub({
              name: this.name,
              website: this.website,
              addressLineOne: this.addressLineOne,
              addressLineTwo: this.addressLineTwo,
              city: this.city,
              state: this.state,
              country: this.country,
              postcode: this.postcode,
              latitude,
              longitude,
              email: this.email,
              tel: this.tel
            })
            .then(response => {
              this.$router.push("/findclub");
            })
            .catch(err => {
              this.error = "Something went wrong with the registration";
            });
          console.log("this far");
        }
      );
    }
  }
};
</script>

<style lang="css">

.helpCoord {
  float: left;
}

</style>
