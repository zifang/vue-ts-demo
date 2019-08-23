<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <menu-item v-for="route in routes" :key="route.path" :item="route"></menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MenuItem from './menuItem.vue';
  @Component({
    components: {
      MenuItem
    }
  })
  export default class MenuMain extends Vue {
      name = 'MenuMain';
      activeIndex: string = '/';
      routes = [];

      mounted() {
        this.routes = (this.$router as any).options.routes;
      }

      handleSelect(key: any, keyPath: any) {
        this.activeIndex = key;
        console.log(key, keyPath);
      }
  }
</script>
<style lang="scss">
  .el-menu > .menu-box {
    display: inline-block;
  }
</style>