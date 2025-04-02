<template>
  <DefaultLayout>
    <!-- headr slot에 Header 컴포넌트 넣기 -->
    <template v-slot:header><Header /></template>
    <!-- headr slot에 NavBar 컴포넌트 넣기 -->
    <template v-slot:navbar><NavBar /></template>
    <!-- slot에 라우트된 페이지 끼워넣기기 -->
    <template v-slot:default><RouterView /></template>
  </DefaultLayout>
</template>
<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/NavBar.vue';
</script>
