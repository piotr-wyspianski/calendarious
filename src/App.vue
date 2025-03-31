<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
});
</script>