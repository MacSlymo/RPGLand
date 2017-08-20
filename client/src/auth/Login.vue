<template lang="html">
  <div class="container box big-vue">

    <h1 class="title-component">Log in to your Account !</h1>


    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Text input" value="RPGlover91">
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-success">This username is available</p> -->
    </div>
    

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" placeholder="" value="12345">
        <span class="icon is-small is-left">
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
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

    <h1>You don't have an Account ? Please
      <a
      href="http://localhost:8080/#/auth/signup">
      Sign up here
      </a>
    </h1>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style lang="css">
</style>
