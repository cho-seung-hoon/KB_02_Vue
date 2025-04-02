<template>
  <DefaultLayout>
    <router-view></router-view>
    <!-- 경로가 바뀔 때마다 컴포넌트를 리렌더링 -->
  </DefaultLayout>
</template>

<script>
export default {
  name: 'App',
};
</script>
