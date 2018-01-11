<template>
 <div class="lazy-scroll">
      <scroll ref="scroll"
              :data="items"
              :scrollbar="scrollbarObj"
              :pullDownRefresh="pullDownRefreshObj"
              :pullUpLoad="pullUpLoadObj"
              :startY="parseInt(startY)"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp"
              @click="clickItem"
      >
      </scroll>
    </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from "base/scroll/scroll.vue";
  // import { ease } from "common/js/ease";

  export default {
    data() {
      return {
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: "加载更多",
        pullUpLoadNoMoreTxt: "没有更多数据了",
        startY: 0,
        items: [],
        itemIndex: 0
      };
    },
    created() {
      for (let i = 0; i < 10; i++) {
        this.items.push("第" + i + "个ITEM");
      }
    },
    components: {
      Scroll
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false;
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false;
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false;
      }
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        console.log("pulling down and load data");
        setTimeout(() => {
          if (this._isDestroyed) {
            return;
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift("我是新数据" + +new Date());
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate();
          }
        }, 2000);
      },
      onPullingUp() {
        // 更新数据
        console.log("pulling up and load data");
        setTimeout(() => {
          if (this._isDestroyed) {
            return;
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = [];
            for (let i = 0; i < 10; i++) {
              newPage.push("第" + ++this.itemIndex + "个ITEM");
            }

            this.items = this.items.concat(newPage);
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate();
          }
        }, 1500);
      },
      clickItem() {
        this.$router.back();
      }
      // ,
      // rebuildScroll() {
      //   this.nextTick(() => {
      //     this.$refs.scroll.destroy();
      //     this.$refs.scroll.initScroll();
      //   });
      // }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
.lazy-scroll{
  height: 100%;
  width: 100%;
}
</style>
