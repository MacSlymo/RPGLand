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

        <div class="navbar-item">
          <router-link class="navbar-link" to="/newclub">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </router-link>
        </div>

        <div class="navbar-item">
          <router-link class="navbar-link" to="/myaccount">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
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
              <p class="control">
                <router-link class="button is-light" to="/auth/signup">
                  <span class="icon">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </span>
                  <span>Signup/Login</span>
                </router-link>
              </p>
              <p class="control">
                <router-link class="button is-light" to="/comment">
                  <span class="icon">
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                  </span>
                  <span>Leave a comment</span>
                </router-link>
              </p>
              <p class="control">
                <router-link class="button is-light" to="/info">
                  <span class="icon">
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                  </span>
                  <span>About us</span>
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
export default {
  name: "app"
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


</style>

<!-- <div class="navbar-start">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link  is-active" href="/documentation/overview/start/">
      Docs
    </a>
    <div class="navbar-dropdown ">
      <a class="navbar-item " href="/documentation/overview/start/">
        Overview
      </a>
      <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
        Modifiers
      </a>
      <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
        Columns
      </a>
      <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
        Layout
      </a>
      <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
        Form
      </a>
      <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
        Elements
      </a>

        <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
          Components
        </a>

      <hr class="navbar-divider">
      <div class="navbar-item">
        <div>
          <p class="is-size-6-desktop">
            <strong class="has-text-info">0.5.1</strong>
          </p>

            <small>
              <a class="bd-view-all-versions" href="/versions">View all versions</a>
            </small>

        </div>
      </div>
    </div>
  </div>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link " href="http://bulma.io/blog/">
      Blog
    </a>
    <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">

        <a class="navbar-item" href="/2017/08/03/list-of-tags/">
          <div class="navbar-content">
            <p>
              <small class="has-text-info">03 Aug 2017</small>
            </p>
            <p>New feature: list of tags</p>
          </div>
        </a>

        <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
          <div class="navbar-content">
            <p>
              <small class="has-text-info">01 Aug 2017</small>
            </p>
            <p>Bulma / Bootstrap comparison</p>
          </div>
        </a>

        <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
          <div class="navbar-content">
            <p>
              <small class="has-text-info">24 Jul 2017</small>
            </p>
            <p>Access previous Bulma versions</p>
          </div>
        </a>

      <a class="navbar-item" href="http://bulma.io/blog/">
        More posts
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        <div class="navbar-content">
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <strong>Stay up to date!</strong>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                  <span class="icon is-small">
                    <i class="fa fa-rss"></i>
                  </span>
                  <span>Subscribe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-link">
      More
    </div>
    <div id="moreDropdown" class="navbar-dropdown ">
      <a class="navbar-item " href="http://bulma.io/extensions/">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <p>
                <strong>Extensions</strong>
                <br>
                <small>Side projects to enhance Bulma</small>
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="icon has-text-info">
                <i class="fa fa-plug"></i>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <a class="navbar-item " href="http://bulma.io/expo/">
    <span class="bd-emoji">🎨</span>
    Expo
  </a>
  <a class="navbar-item " href="http://bulma.io/love/">
    <span class="bd-emoji">❤️</span>
    Love
  </a>
</div> -->
