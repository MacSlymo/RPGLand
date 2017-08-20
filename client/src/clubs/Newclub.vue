<template lang="html">
  <div class="container box big-vue">

    <h1 class="title-component">Create your Club !</h1>

    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="Peter Jackson">
        <span class="icon is-small is-left">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
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
        <input class="input" type="text" placeholder="Text input" value="Address Line 1">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="Address Line 2">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="City">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="State">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="Post Code">
        <span class="icon is-small is-left">
          <i class="fa fa-address-card"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <br>

      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="Country">
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

    <div class="field is-grouped">
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Number input" value="Longitude">
        <span class="icon is-small is-left">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Number input" value="Latitude">
        <span class="icon is-small is-left">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
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
        <input class="input" type="text" placeholder="Email input" value="best.club@gmail.com">
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
        <input class="input" type="text" placeholder="0675263594" value="">
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
        <button class="button is-primary">Submit</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "newclub",
  data() {
    return {};
  }
};
</script>

<style lang="css">
</style>
