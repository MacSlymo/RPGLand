<template lang="html">
  <div class="container box big-vue">
    <h1 class="title-component">My Clubs</h1>

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

    <h1 class="title-component">My Friends (Soon ...)</h1>

    <ul>
      <li></li>
    </ul>
    <br>
    <br>

    <h1 class="title-component">My Characters (Soon ...)</h1>

    <ul>
      <li></li>
    </ul>
    <br>
    <br>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>
