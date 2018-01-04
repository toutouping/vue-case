<template>
  <transition name="move">
    <div class="update-password" v-show="showFlag">
      <div class="title">
        <div class="back" @click="hideFn">
          <i class="icon-arrow_liftF9"></i>
        </div>
        <h4>修改密码</h4>
      </div>
      <div class="update-wrapper">
        <div class="pass-content old">
          <p class="text">原密码</p>
          <div class="input">
            <input type="text" placeholder="输入原密码">
          </div>
        </div>
        <div class="pass-content new">
          <p class="text">新密码</p>
          <div class="input">
            <input type="text" placeholder="输入原密码">
          </div>
          <div class="input">
            <input type="text" placeholder="输入原密码">
          </div>
        </div>
        <p class="note">密码长度8~16位，数字、字母、字符至少包含两种</p>
        <div class="verify">
          <p class="text">验证码</p>
          <div class="input">
            <input type="text" placeholder="图片验证码">
            <span class="verify-code"></span>
          </div>
        </div>
        <v-button :type="'block'">确定</v-button>
        <v-button :type="'block'" :color="'secondary'">取消</v-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import vButton from "base/vButton/vButton";

export default {
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    showFn() {
      this.showFlag = true;
    },
    hideFn() {
      this.showFlag = false;
    }
  },
  components: {
    vButton: vButton
  }
};
</script>

<style lang="scss" scoped type="text/css">
.update-password{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0px;
  z-index: 30;
  width: 100%;
  color: #333;
  background: #fff;
  &.move-enter-active,
  &.move-leave-active {
    transition: all 0.2s linear;
  }
  &.move-enter,
  &.move-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .title{
    height: 56px;
    line-height: 56px;
    @include border-1px(#e6e6e6);
    .back{
      position: absolute;
      top: 10px;
      left: 0;
      .icon-arrow_liftF9{
        display: block;
        padding: 10px;
        font-size: 20px;
      }
    }
    h4{
      text-align: center;
      font-size: 15px;
      font-weight: bold;
    }
  }
  .update-wrapper{
    padding: 30px 20px 0px 20px;
    font-size: 14px;
    line-height: 30px;
    color: #333;
    margin-bottom: 15px;
    .input{
      margin-bottom: 15px;
      input{
        display: block;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding: 12px 12px;
        font-size: 14px;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        &:focus{
          border-color: #66afe9;
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        }
      }
    }
    .note{
      margin-bottom: 15px;
    }
    .verify{
      .input{
        display: flex;
        input{
          flex: 1;
        }
        .verify-code{
          display: inline-block;
          vertical-align: top;
          width: 125px;
          height: 34px;
          background-repeat: no-repeat;
          background-image: url('getCode.png');
        }
      }
    }
  }
}
</style>
