<template>
    <div class="horMenu" ref="viewport">
      <div class="scroll-content" ref="tabList">
        <div v-for="(item,index) in navList" @click="selectNav($event,index)" class="nav-item">
          <span :class='{"active": isCurrentTab(index)}'>{{item}}</span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
// import Scroll from "base/scroll/scroll";

const EVENT_CHANGE = "nav-change";

export default {
  props: {
    navList: {
      type: Array,
      default() {
        return [{
          id: 1,
          name: "default"
        }];
      }
    },
    defaultTab: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      currentTab: 0,
      current: 1
    };
  },
  mounted() {
    this._initTabListWidth();
    this._initScroll();
    if (!this.defaultTab) {
      this.current = this.currentTab;
    } else {
      this.current = this.defaultTab;
    }
    setTimeout(() => {
      this._adjust(this.current);
    }, 500);
  },
  methods: {
    selectNav(event, index) {
      if (!event._constructed) {
        return;
      }
      this.current = index;
      this._adjust(this.current);
      this.$emit(EVENT_CHANGE, event, index);
    },
    isCurrentTab (index) {
      return index === this.current;
    },
    _initScroll() { // 实现滚动
      if (!this.tabListScroll) {
        this.tabListScroll = new BScroll(this.$refs.viewport, {
          click: true,
          scrollX: true
        });
      } else {
        this.tabListScroll.refresh();
      }
    },
    _initTabListWidth() {
      const tabList = this.$refs.tabList;
      const items = tabList.children;
      let width = 0;
      for (let i = 0; i < items.length; i++) {
        width += items[i].clientWidth;
      }
      tabList.style.width = (width + 1) + "px";
    },
    _adjust(current) {
      const viewportWidth = this.$refs.viewport.clientWidth;
      const tabListWidth = this.$refs.tabList.clientWidth;
      const minTranslate = Math.min(0, viewportWidth - tabListWidth);
      const middleTranslate = viewportWidth / 2;
      const items = this.$refs.tabList.children;
      let width = 0;
      this.navList.every((item, index) => {
        if (index === current) {
          return false;
        }
        width += items[index].clientWidth;
        return true;
      });
      let translate = middleTranslate - width;
      translate = Math.max(minTranslate, Math.min(0, translate));
      this.tabListScroll.scrollTo(translate, 0, 30);
    }
  },
  components: {
    // Scroll: Scroll
  }
};
</script>

<style lang="scss">
.horMenu{
  overflow: hidden;
  background: #f2f2f2;
  font-size: .26rem;
  white-space: nowrap;
  padding-right: 10px;
  .scroll-content{
    .nav-item{
      display: inline-block;
      padding: 0 10px;
      span{
        display: inline-block;
        line-height: 32px;
        font-size: 15px;
        color: rgb(116, 116, 116);
        border-color: rgb(242, 242, 242);
        border-bottom: 2px solid rgba(237,91,0,0);
        &.active{
          color: rgb(237, 91, 0);
          border-color: rgb(237, 91, 0);
        }
      }
    }
  }
}
</style>


