<template>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav me-auto">
      <li v-for="menu in menus" :key="menu.url" class="nav-item">
        <router-link :to="menu.url" class="nav-link">
          <i :class="menu.icon"></i> {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'MenuItem',
  data() {
    return {
      menus: config.menus,
    };
  },
};
</script>
