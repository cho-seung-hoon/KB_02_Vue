<template>
  <div class="card card-body">
    <h2>Test</h2>
    <div>
      <router-link :to="{ name: 'test/num', params: { num: 1 } }">
        <button class="btn btn-primary">1번 버튼</button>
      </router-link>
    </div>
    <!-- 라우트된 컴포넌트가 보여지는 부분 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Test',
};
</script>
