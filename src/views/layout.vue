<template>
  <div>
    <app-nav />
    <router-view />
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MenuItem from '../components/menu/menuItem.vue';
  import AppNav from '../components/menu/menu.vue';
  @Component({
    components: {
      AppNav,
      MenuItem
    }
  })
  export default class Layout extends Vue {
      name = 'Layout';
  }
</script>

<style lang="scss">
  .el-menu > .menu-box {
    display: inline-block;
  }
</style>