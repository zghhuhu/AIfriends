<script setup>

import Menuicon from "@/components/icons/Menuicon.vue";
import Createicon from "@/components/icons/Createicon.vue";
import Friendicon from "@/components/icons/Friendicon.vue";
import Homepageicon from "@/components/icons/Homepageicon.vue";
import Searchicon from "@/components/icons/Searchicon.vue";
</script>

<template>
<div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Navbar -->
    <nav class="navbar w-full bg-base-100 shadow-sm">
      <div class="navbar-start">
           <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
           <Menuicon />

      </label>
         <div class="px-0 font-bold text-2xl">AIfriends</div>
      </div>

     <div class="navbar-center w-4/5 max-w-180">
         <div class="join w-4/5">
    <input class="input join-item rounded-l-full w-4/5" placeholder="搜索你感兴趣的内容" />
           <button class="btn join-item rounded-r-full gap-0">
      <Searchicon/>
           搜索
       </button>
</div>


     </div>

      <div class="navbar-end">
      <RouterLink :to="{name:'login-index'}" active-class="btn-focus" class=" btn btn-ghost text-lg">登录</RouterLink>

      </div>


    </nav>
    <!-- Page content here -->
    <slot></slot>
  </div>

  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-54">
      <!-- Sidebar content here -->
      <ul class="menu w-full grow">
        <!-- List item -->
        <li>
          <RouterLink :to="{name:'homepage-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="首页">
         <Homepageicon/>
            <span class="is-drawer-close:hidden text-base whitespace-nowrap">首页</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="{name:'friends-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="好友">
            <Friendicon/>
            <span class="is-drawer-close:hidden text-base whitespace-nowrap">好友</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink
      :to="{ name:'create-index'}" active-class="menu-focus"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3"
      data-tip="创作"
    >
      <Createicon />
      <span class="is-drawer-close:hidden text-base whitespace-nowrap">创作</span>
    </RouterLink>
        </li>



        <!-- List item -->

      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>