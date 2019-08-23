<template>
    <div class="menu-box" v-if="!item.hidden">
        <template v-if="!item.children || item.children && item.children.length ===1">
            <el-menu-item :index="item.path">
                <router-link :to="item.path">{{item.meta.title}}</router-link>
            </el-menu-item>
        </template>
        <el-submenu v-else :index="item.path" popper-append-to-body>
            <template slot="title">{{item.meta.title}}</template>
            <menu-item v-for="child in item.children" :key="child.path" :item="child"></menu-item>
        </el-submenu>
    </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class MenuItem extends Vue {
      name = 'MenuItem';

      @Prop()
      item!: any;
  }
</script>
<style lang="scss">
  .el-menu--horizontal {
    a {
      display: block;
      padding: 0 10px;
      color: #fff;  
    }
    .el-menu-item.is-active a {
      color: rgb(255, 208, 75);
    }
  }
  div.el-menu--horizontal {
    .menu-box {
      display: block;
    }
  }
  
</style>