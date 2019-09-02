<template>
  <div>
    <side-bar v-bind:items="sidebarItems" />
    <div class="container">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import Router from '@/router';

const routes = Router.options.routes;
const sidebarItems = routes.filter(r => r.path !== '/');

export default {
  name: 'DefaultLayout',
  components: {
    SideBar,
  },
  data: () => ({
    sidebarItems,
  }),
};
</script>

<style>
.container {
  padding-left: 15rem;
  overflow: hidden;
}
.content {
  padding: 0 2rem;
}
</style>
