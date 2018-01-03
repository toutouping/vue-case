<template>
  <div class="app">
     <keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
     <div v-if="$route.name !== 'login'" class="footer tab border-1px">
      <router-link class="tab-item home" v-bind:to="'home'">
        <span class="icon-uniF0D1F9"></span>
        <p>首页</p>
      </router-link>
      <router-link class="tab-item category" v-bind:to="'category'">
        <span class="icon-uniF091F9"></span>
        <p>分类</p>
      </router-link>
      <router-link class="tab-item menu2" v-bind:to="'menu2'">
        <span class="icon-shopping_cartF9"></span>
        <p>菜单二</p>
      </router-link>
      <router-link class="tab-item menu3" v-bind:to="'menu3'">
        <span class="icon-uniF1C0F9"></span>
        <p>菜单三</p>
      </router-link>
      <router-link class="tab-item userInfo" v-bind:to="'userInfo'">
        <span class="icon-uniF1A2F9"></span>
        <p>我的账号</p>
      </router-link>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
};
</script>

<style lang="scss" scoped type="text/css">
.app{
  height: 100%;
  width: 100%;
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 38px;
    padding-top: 4px;
    background: #fff;
    .tab-item{
      flex: 1;
      text-align: center;
      span{
        font-size: 22px;
      }
      p{
        font-size: 10px;
      }
      &.router-link-active {
        color: #f56c02;
      }
    }
  }
}
</style>
