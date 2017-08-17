<template>
  <div class="homepage">
    <br>
    <h1>{{ msg }}</h1>
    <br>
    <!-- <h3>Discover what are roleplaying games</h3>
    <h3>Reach other players and start having fun</h3> -->
    <h3>Discover what Roleplaying Game is</h3>
    <br>
    <h3>Join a session near you</h3>
    <br>
    <h3>Create a new character for your next session</h3>
    <br>
    <br>
    <br>

    <div class="tile is-parent">
      <article class="tile is-child notification is-primary">
        <p class="title">Vertical...</p>
        <p class="subtitle">Top tile</p>
      </article>
    </div>
</div>


  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to JDRLand"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.homepage {
  background-color: grey;
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


</style>
