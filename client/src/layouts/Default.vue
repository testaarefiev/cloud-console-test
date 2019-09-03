<template>
  <div>
    <side-bar v-bind:items="sidebarItems" v-bind:selected-index="sidebarSelectedItemIndex" />
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
  beforeMount() {
    const routeIndex = sidebarItems.findIndex(r => r.path === this.$route.path);
    this.sidebarSelectedItemIndex = routeIndex;
  },
  data: () => ({
    sidebarItems,
    sidebarSelectedItemIndex: 0,
  }),
};
</script>

<style>
.container {
  padding-left: 15rem;
  overflow: hidden;
}
.content {
  padding: 0 2rem 2rem;
}
h1 {
  padding: 3rem 0 1rem;
}
</style>
