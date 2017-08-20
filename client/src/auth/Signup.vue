<template lang="html">
  <div class="container box big-vue">

    <h1 class="title-component">Create your Account !</h1>

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
    <br>

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
    <br>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Email input" value="peter.jackson@gmail.com">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>
    <br>

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
    <br>

    <div class="field">
      <label class="label">Are you a Player or a Game Master ?</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="question">
          Player
        </label>
        <label class="radio">
          <input type="radio" name="question">
          Game Master
        </label>
      </div>
    </div>
    <br>

    <div class="field">
      <label class="label">Phone Number (optional)</label>
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
    <br>

    <div class="field">
      <div class="label">
        <button class="button is-primary">Submit</button>
      </div>
    </div>
    <br>

    <h1>Already have an Account ? Please
      <a
      href="http://localhost:8080/#/auth/login">
      Log in here
      </a>
    </h1>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {};
  }
};
</script>

<style lang="css">

</style>
