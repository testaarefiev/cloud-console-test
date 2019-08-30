<template>
  <div id="app">
    <vs-sidebar
      static-position
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer>
      <vs-sidebar-item to="/addData" index="1">
        Add Data
      </vs-sidebar-item>
      <vs-sidebar-item to="/logs" index="2">
        Logs
      </vs-sidebar-item>
      <vs-sidebar-item to="/data" index="3">
        Data
      </vs-sidebar-item>
    </vs-sidebar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
