<template>
  <div>
    <menu-main />
    <router-view />
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MenuItem from '../components/menu/menuItem.vue';
  import MenuMain from '../components/menu/menu.vue';
  @Component({
    components: {
      MenuMain,
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