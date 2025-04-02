<template>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <i class="fa-solid fa-house"></i>Fake Sotre
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"> </span>
    </button>
    <MenuItem />
  </div>
</template>
<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'MenuGroup',
  components: { MenuItem },
};
</script>
