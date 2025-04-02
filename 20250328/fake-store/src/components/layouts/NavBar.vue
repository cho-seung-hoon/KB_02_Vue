<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <MenuGroup />
    </nav>
  </div>
</template>
<script>
import MenuGroup from './menu/MenuGroup.vue';
export default {
  name: 'NavBar',
  components: { MenuGroup },
};
</script>
