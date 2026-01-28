import { createRouter, createWebHistory } from 'vue-router'
import Homepageindex from "@/views/Homepage/Homepageindex.vue";
import Friendsindex from "@/views/Friends/Friendsindex.vue";
import Createindex from "@/views/create/Createindex.vue";
import Notfound404 from "@/views/Notfound/Notfound404.vue";
import Registerindex from "@/views/user/account/Registerindex.vue";
import Spaceindex from "@/views/user/space/Spaceindex.vue";
import Proflieindex from "@/views/user/profile/Proflieindex.vue";
import Loginindex from "@/views/user/account/Loginindex.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path:'/',
          component: Homepageindex,
          name:'homepage-index',
      },

       {
          path: '/friends/',
          component:Friendsindex,
          name:'friends-index',
      },

       {
          path: '/create/',
          component: Createindex,
          name:'create-index',
      },

       {
          path: '/404/',
          component: Notfound404,
          name:'404',
      },

       {
          path: '/user/account/register/',
          component: Registerindex,
          name:'register-index',
      },

       {
          path: '/user/account/login/',
          component: Loginindex,
          name:'login-index',
      },

       {
          path: '/user/space/user-id/',
          component: Spaceindex,
          name:'user-space--index',
      },

       {
          path: '/user/profile/',
          component: Proflieindex,
          name:'user-profile-index',
      },


       {
          path:'/:pathMatch(.*)*',
          component: Notfound404,
          name:'not-found',
      },

  ],
})

export default router
