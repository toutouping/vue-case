<template>
  <div class="v-button">
    <button class="button" :class="buttonClass" @click="loginFn">
      <span class="button-inner">{{buttonText}}</span>
      <div class="button-effect">
      </div>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    buttonText: {
      type: String
    },
    buttonClass: {
      type: String
    }
  },
  methods: {
    loginFn(events) {
      this.$emit("btn-click", events);
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
.v-button{
  margin-top: 5px;
  margin-bottom: 5px;
  button{
    border: 0;
    font-family: inherit;
    font-style: inherit;
    font-variant: inherit;
    line-height: 1;
    text-transform: none;
    cursor: pointer;
  }
  .button{
    display: inline-block;
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 50px;
    &.btn-def{
      color: #333;
      background-color: #fff;
      border-color: #ccc;
    }
    &.btn-def.focus,
    &.btn-def:focus,
    &.btn-def:hover,
    &.btn-def:active.focus,
    &.btn-def:active:focus,
    &.btn-def:active:hover{
        color: #333;
        background-color: #d4d4d4;
        border-color: #8c8c8c;
        outline: none;
    }
    &.btn-info {
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;
      outline: none;
    }
    &.btn-info.focus,
    &.btn-info:focus,
    &.btn-info:hover,
    &.btn-info:active.focus,
    &.btn-info:active:focus,
    &.btn-info:active:hover{
      color: #fff;
      background-color: #269abc;
      border-color: #1b6d85;
      outline: none;
    }
   }
   .button-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .button-effect {
    border-radius: 50%;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    position: absolute;
    z-index: 0;
    display: none;
    background-color: #555;
    opacity: .2;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    pointer-events: none;
    top: 0;
    left: 0;
 }
}
</style>


