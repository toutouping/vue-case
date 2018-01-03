<template>
    <component :is="activeView" v-if="show" :w="w"/>
</template>
<script>
import pageChange from "../mixins";
import preventPageScroll from "../utils/prevent-page-scroll";

export default {
  mixins: [pageChange],
  data() {
    return {
      activeView: "",
      show: false,
      w: {}
    };
  },
  components: {},
  mounted() {
    preventPageScroll.prevent();
    setTimeout(() => {
      document.querySelector(".wc-messagebox__btn--then").addEventListener("click", this.success, false);
    }, 1);
  },
  methods: {
    success() {
      preventPageScroll.recover();
      /* 先要隐藏掉 mask 和 alert */
      document.querySelector(".wc-messagebox__mask---").classList.add("wc-messagebox__mask-diff---");
      /* 这里 popup 放的是 mask-diff */
      document.querySelector(".wc-messagebox__popup---").classList.add("wc-messagebox__mask-diff---");

      /* 在动画结束之后, 删掉元素 */
      document.querySelector(".wc-messagebox__popup---").addEventListener(
        "transitionend",
        () => {
          this.show = false;
        },
        false
      );
    }
  }
};
</script>
