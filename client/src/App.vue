<template>
  <div id="app">
    <nav class="navbar ">
      <div class="navbar-brand">

        <router-link to="/">
          <img id="main-logo" src="./assets/logo.png" >
        </router-link>

        <div class="navbar-item">
          <router-link class="navbar-link" to="/findclub">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </router-link>
        </div>

        <div class="navbar-item" v-if="$root.user">
          <router-link class="navbar-link" to="/newclub">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </router-link>
        </div>

        <div class="navbar-item">
          <router-link disabled class="navbar-link account" to="/findclub">
            <i class="fa fa-user-circle" aria-hidden="true"></i><span class="soon">(Soon ...)</span>
          </router-link>
        </div>

        <div id="burger" class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p v-if="!$root.user" class="control">
                <router-link class="button is-light" to="/auth/signup">
                  <span class="icon">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </span>
                  <span>Signup</span>
                </router-link>
              </p>
              <p v-if="!$root.user" class="control">
                <router-link class="button is-light" to="/auth/login">
                  <span class="icon">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                  </span>
                  <span>Login</span>
                </router-link>
              </p>
              <p v-else-if="$root.user" class="control">
                <button @click="logout" class="button is-light" to="/auth/signup">
                  <span class="icon">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                  </span>
                  <span>Logout</span>
                </button>
              </p>
              <p class="control">
                <router-link disabled class="button is-light" to="/findclub">
                  <span class="icon">
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                  </span>
                  <span>Leave a comment (Soon ...)</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <br>
    <br>

    <router-view></router-view>
    <footer><i class="fa fa-copyright" aria-hidden="true"></i> 2017 Mathieu REVILLION</footer>
    <br>
  </div>
</template>

<script>
import auth from "./apiLogout";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.error = "";
      auth.logout(this);
      this.$router.push("/findclub");
    }
  }
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  text-align: center;
}

#main-logo {
  height: 80px;
  width: auto;
  margin: 20px 0px 0px 15px;
}

#burger {
  margin-top: 26px;
  margin-right: 15px;
}

.big-vue {
  width: 90%;
}

.title-component {
  font-size: 2em;
  margin-bottom: 20px;
}

.soon {
  margin-left: 5px;
}

.account {
  opacity: 0.3;
}

</style>
