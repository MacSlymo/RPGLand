<template lang="html">
  <div class="container box big-vue">
    <h1 class="title-component">Find a club in the <router-link to="">List</router-link> or on the <router-link to="">Map</router-link> !</h1>

    <ul>The clubs
      <li>club 1</li>
      <li>club 2</li>
      <li>club 3</li>
      <li>club 4</li>
      <li>club 5</li>
      <li>club 6</li>
    </ul>
    <br>
    <br>
    <gmap-map
    center="center"
    zoom="7"
    style="width: 100%; height: 500px; text-align: center"
  >
    <gmap-marker
      key="index"
      position="m.position"
      clickable="true"
      draggable="true"
      @click=""
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
export default {
  name: "clubs",
  data() {
    return {};
  }
};
</script>

<style lang="css">
#map {
      height: 600px;
      width: auto;
      text-align: center;
     }
</style>
