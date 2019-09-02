<template>
  <vs-sidebar
    static-position
    v-bind:default-index="selectedIndex"
    color="primary"
    class="sidebarx"
    spacer
    v-bind:hidden-background="true">
    <div class="header-sidebar" slot="header">
      CloudConsole test
    </div>
    <vs-sidebar-item
      v-for="(item, index) in items"
      v-bind:to="item.path"
      v-bind:index="index"
      :key="index">
      {{item.name}}
    </vs-sidebar-item>
  </vs-sidebar>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    items: { type: Array },
    selectedIndex: { type: Number, default: 0 },
  },
};
</script>

<style>
.sidebarx {
  font-size: 14px;
  width: 15rem;
  position: fixed;
  z-index: 1010;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: auto;
}
.sidebarx .vs-sidebar {
  background-color: #f5f7fb;
}
</style>
