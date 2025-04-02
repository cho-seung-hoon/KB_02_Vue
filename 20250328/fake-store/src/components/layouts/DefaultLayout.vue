<template>
  <div>
    <Header />
    <NavBar />
    <div class="content">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import NavBar from './NavBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Header,
    NavBar,
  },
};
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
