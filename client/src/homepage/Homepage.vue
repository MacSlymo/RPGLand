<template>
  <div class="homepage">
    <div class="tile is-parent is-12">

      <div class="tile is-child is-4 box">
        <article class="tile notification is-primary">
          <div class="content">
            <p class="title">Welcome to RPGLand !</p>
            <br>
            <h3 class="subtitle">Find RPG Clubs near you</h3>
            <br>
            <h3 class="subtitle">Enter the fellowship</h3>
            <br>
            <h3 class="subtitle">Create a new character for your next session (Soon ...)</h3>
          </div>
        </article>
      </div>
      <br>

      <div class="tile is-child is-4 box">
        <article class="tile notification is-primary">
          <div class="content">
            <p class="title">Find a Club near you !</p>
            <br>
            <h3 class="subtitle">Look for the club that suits you</h3>
            <br>
            <h3 class="subtitle">Locate a Session on the map</h3>
            <br>
            <h3 class="subtitle">Discuss with other members</h3>
          </div>
        </article>
      </div>
      <br>

      <div class="tile is-child is-4 box">
        <article class="tile notification is-primary">
          <div class="content">
            <p class="title">Join the Community !</p>
            <br>
            <h3 class="subtitle">Join other players</h3>
            <br>
            <h3 class="subtitle">Live adventures together</h3>
            <br>
            <h3 class="subtitle">Create your own Character for your next session !</h3>
          </div>
        </article>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
export default {
  name: "hello",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.homepage {
  background-color: white;
}

h1, h3 {
  font-weight: normal;
  color: white
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.link {
  color: white;
  text-decoration: italic
}

.box{
  height: 200px;
}


</style>
