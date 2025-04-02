<template>
  <li class="nav-item">
    <!-- 클릭 시 주소 -->
    <!-- <RouterView> 자리에 Home 컴포넌트 렌더링 -->
    <RouterLink :to="menu.uri" href="#" class="nav-link">{{
      menu.text
    }}</RouterLink>
  </li>
</template>
<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>
