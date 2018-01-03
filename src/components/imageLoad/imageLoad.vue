<template>
  <div class="image-load">
    <scroll
      ref="listScroll"
      :probe-type="probeType"
      :data="discList"
      :click="true">
        <h1 class="list-title">景点推荐</h1>
        <ul>
          <li v-for="item in discList" class="item">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.name"></h2>
              <p class="desc" v-html="item.desc"></p>
            </div>
          </li>
        </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import scroll from "base/scroll/scroll.vue";

export default {
  props: {
    discList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      probeType: 0
    };
  },
  created() {
    this.probeType = 3;
  },
  components: {
    scroll: scroll
  }
};
</script>
<style lang="scss">
.image-load{
  width: 100%;
  height: 100%;
  .list-title{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .item{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
    .icon{
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: 14px;
      .name{
        margin-bottom: 10px;
        color: #999;
      }
      .desc{
        color: #999;
      }
    }
  }
}
</style>
