<template>
  <button class="button" ref="buttonRef" :class="btnCls" @click.prevent.stop="clickFn">
    <span class="button-inner">
      <slot></slot>
    </span>
    <div class="button-effect">
    </div>
  </button>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    color: { /* light secondary danger dark */
      type: String
    },
    type: { /* outline clear secondary danger dark */
      type: String
    },
    size: {
      type: String
    }
  },
  mounted () {
    // let ths = this;
    // ths.$refs.buttonRef.addEventListener("mousedown", () => {
    //   let cls = ths.$refs.buttonRef.getAttribute("class");
    //   ths.$refs.buttonRef.setAttribute("class", cls + " activated");
    // });
    // ths.$refs.buttonRef.addEventListener("mouseup", () => {
    //   setTimeout(() => {
    //     let cls = ths.$refs.buttonRef.getAttribute("class");
    //     ths.$refs.buttonRef.setAttribute("class", cls.replace(new RegExp("( activated)"), ""));
    //   }, 200);
    // });
  },
  computed: {
    btnCls() {
      /* button-color-颜色 */
      /* button-type-形态 */
      let typeCls = this.type ? "button-type-" + this.type : "button-type-basic";
      let colorCls = this.color ? "button-color-" + this.color : "button-color-default";
      let sizeCls = this.size ? "button-size-" + this.size : "button-size-medium";
      return typeCls + " " + colorCls + " " + sizeCls;
    }
  },
  methods: {
    clickFn(events) {
      this.$emit("btn-click", events);
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
.button {
  border: 0;
  text-align: center;
  appearance: none;
  position: relative;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  z-index: 0;
  display: inline-block;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: top;
  vertical-align: -webkit-baseline-middle;
  -webkit-transition: background-color,opacity .1s linear;
  transition: background-color,opacity .1s linear;
  -webkit-font-kerning: none;
  font-kerning: none;
  user-select: none;
  line-height: 1;
  contain: content;
  margin: .4rem .2rem;
  &:active, &:focus {
      outline: 0;
  }
  /* button-type-大小 */
  &.button-size-small{
    height: 2.8em;
    font-size: 1.6rem;
    padding: 0 1em;
  }
  &.button-size-medium{
    height: 2.8em;
    font-size: 1.6rem;
    padding: 0 1em;
  }
  &.button-size-large{
    height: 2.8em;
    font-size: 2rem;
    padding: 0 1em;
  }
  /* button-type-形态 颜色 */
  &.button-type-basic{
    border-radius: 4px;
    &.button-color-default{
      color: #fff;
      background-color: #488aff;
      &:active{
        background-color: #427feb;
      }
    }
    &.button-color-light{
      color: #000;
      background-color: #f4f4f4;
      &:active{
        background-color: #e0e0e0;
      }
    }
    &.button-color-secondary {
      color: #fff;
      background-color: #32db64;
      &:active{
        background-color: #2ec95c;
      }
    }
    &.button-color-danger {
      color: #fff;
      background-color: #f53d3d;
      &:active{
        background-color: #e13838;
      }
    }
    &.button-color-dark {
      color: #fff;
      background-color: #222;
      &:active{
        background-color: #343434;
      }
    }
  }
  &.button-type-outline{
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    background-color: transparent;
    &.button-color-default{
      border-color: #488aff;
      color: #488aff;
      &:active{
        color: #fff;
        background-color: #488aff;
      }
    }
    &.button-color-light{
      border-color: #e0e0e0;
      color: #e0e0e0;
      &:active{
        color: #000;
        background-color: #f4f4f4;
        opacity: 1;
      }
    }
    &.button-color-secondary {
      border-color: #32db64;
      color: #32db64;
      &:active{
        color: #fff;
        background-color: #32db64;
      }
    }
    &.button-color-danger {
      border-color: #f53d3d;
      color: #f53d3d;
      &:active{
        color: #fff;
        background-color: #f53d3d;
      }
    }
    &.button-color-dark {
      border-color: #222;
      color: #222;
      &:active{
        color: #fff;
        background-color: #222;
      }
    }
  }
  &.button-type-clear{
    border-color: transparent;
    color: #488aff;
    background-color: transparent;
    &.button-color-default{
      border-color: #488aff;
      color: #488aff;
      &:active{
        opacity: 0.4;
      }
    }
    &.button-color-light{
      border-color: #f4f4f4;
      color: #f4f4f4;
      &:active{
        opacity: 0.4;
      }
    }
    &.button-color-secondary {
      border-color: #32db64;
      color: #32db64;
      &:active{
        opacity: 0.4;
      }
    }
    &.button-color-danger {
      border-color: #f53d3d;
      color: #f53d3d;
      &:active{
        opacity: 0.4;
      }
    }
    &.button-color-dark {
      border-color: #222;
      color: #222;
      &:active{
        opacity: 0.4;
      }
    }
  }
  &.button-type-round{
    border-radius: 64px;
    padding: 0 2.6rem;
    &.button-color-default{
      color: #fff;
      background-color: #488aff;
      &:active{
        color: #fff;
        background-color: #427feb;
      }
    }
    &.button-color-light{
      color: #000;
      background-color: #f4f4f4;
      &:active{
        background-color: #e0e0e0;
      }
    }
    &.button-color-secondary {
      color: #fff;
      background-color: #32db64;
      &:active{
        background-color: #2ec95c;
      }
    }
    &.button-color-danger {
      color: #fff;
      background-color: #f53d3d;
      &:active{
        background-color: #e13838;
      }
    }
    &.button-color-dark {
      color: #fff;
      background-color: #222;
      &:active{
        background-color: #343434;
      }
    }
  }
  &.button-type-block{
    display: block;
    clear: both;
    width: 100%;
    contain: strict;
    margin-left: 0;
    margin-right: 0;
    border-radius: 64px;
    padding: 0 2.6rem;
    &.button-color-default{
      color: #fff;
      background-color: #488aff;
      &:active{
        background-color: #427feb;
      }
    }
    &.button-color-light{
      color: #000;
      background-color: #f4f4f4;
      &:active{
        background-color: #e0e0e0;
      }
    }
    &.button-color-secondary {
      color: #fff;
      background-color: #32db64;
      &:active{
        background-color: #2ec95c;
      }
    }
    &.button-color-danger {
      color: #fff;
      background-color: #f53d3d;
      &:active{
        background-color: #e13838;
      }
    }
    &.button-color-dark {
      color: #fff;
      background-color: #222;
      &:active{
        background-color: #343434;
      }
    }
  }
  &.button-type-full{
    display: block;
    width: 100%;
    contain: strict;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;
    border-right-width: 0;
    border-left-width: 0;
    &.button-color-default{
      color: #fff;
      background-color: #488aff;
      &:active{
        background-color: #427feb;
      }
    }
    &.button-color-light{
      color: #000;
      background-color: #f4f4f4;
      &:active{
        background-color: #e0e0e0;
      }
    }
    &.button-color-secondary {
      color: #fff;
      background-color: #32db64;
      &:active{
        background-color: #2ec95c;
      }
    }
    &.button-color-danger {
      color: #fff;
      background-color: #f53d3d;
      &:active{
        background-color: #e13838;
      }
    }
    &.button-color-dark {
      color: #fff;
      background-color: #222;
      &:active{
        background-color: #343434;
      }
    }
  }

  .button-inner {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

</style>


