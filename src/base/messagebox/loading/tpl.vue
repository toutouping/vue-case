<template>
  <div class="loading" v-if="show">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: "正在载入"
      }
    },
    data() {
      return {
        show: false
      };
    },
    methods: {
      hide() {
        this.show = false;
      }
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .loading{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    .loading-content{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -24px;
      margin-top: -24px;
      .desc{
        line-height: 20px;
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>
