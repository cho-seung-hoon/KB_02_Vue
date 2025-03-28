<!-- <template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log(this.$route.fullPath);
  },
};
</script> -->

<!-- <template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 setup : {{ url }}</p>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
  name: 'About',
  setup() {
    const url = useRoute().fullPath;

    return { url };
  },
};
</script> -->

<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 setup : {{ url }}</p>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
  name: 'About',
  setup() {
    const url = useRoute().fullPath;

    return { url };
  },
};
</script>
