<template>
  <div id="app">
    <default-layout>
      <router-view/>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/Default';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
</script>

<style>
#app {
  font-size: 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
