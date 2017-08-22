import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/homepage/Homepage";
import Clubs from "@/clubs/Findclub";
import Newclub from "@/clubs/Newclub";
import Signup from "@/auth/Signup";
import Login from "@/auth/Login";
import Myaccount from "@/myaccount/Myaccount";
import Info from "@/moreinfo/Info";
import theComment from "@/comment/Comment";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/findclub",
      name: "findclub",
      component: Clubs
    },
    {
      path: "/newclub",
      name: "newclub",
      component: Newclub
    },
    {
      path: "/auth/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login
    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: Myaccount
    },
    {
      path: "/info",
      name: "info",
      component: Info
    },
    {
      path: "/comment",
      name: "comment",
      component: theComment
    }

    // {
    //   path: '/auth/signup',
    //   name: 'signup',
    //   component: Signup
    // },
    //   path: '/auth/login',
    //   name: 'login',
    //   component: Login
    // }
  ]
});

/*

<div>
  <router-link to="https://vuejs.org">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </router-link>  <!-- //when not logged in -->
  <router-link to="https://forum.vuejs.org">
    <i class="fa fa-search" aria-hidden="true"></i>
  </router-link> <!-- //when not logged in -->
</div>

<div>
  <router-link to="https://gitter.im/vuejs/vue">
    <i class="fa fa-map-marker" aria-hidden="true"></i>
  </router-link> <!-- //when logged in -->
  <router-link to="https://gitter.im/vuejs/vue">
    <i class="fa fa-user-circle" aria-hidden="true"></i>
  </router-link>
</div>

*/
