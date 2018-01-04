<template>
  <div class="login">
  <div class="login-wrapper">
    <div class="logo-wrapper">
      <span class="logo"></span>
      <h4 class="title">VUE登录账号</h4>
    </div>
    <div class="login-content">
      <label class="login-user border-1px">
           <input class="account" autocomplete="off" type="text" v-model="userName" placeholder="账号">
      </label>
      <label class="login-password">
           <input v-show="!pwdVisable" class="password" autocomplete="off" type="text"  v-model="password" placeholder="密码">
           <input v-show="pwdVisable" class="password" autocomplete="off" type="password" v-model="password" placeholder="密码">
           <div class="eye_panel pwd-visiable" @click="pwdVisableFn">
            <i class="eye pwd-eye">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
              <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
            </svg>
            </i>
          </div>
      </label>
    </div>
    <div class="operate">
      <v-button @btn-click="loginFn" :type="'block'">登录</v-button>
      <v-button :type="'block'" :color="'secondary'">注册</v-button>
    </div>
    <div class="other">
      <fieldset class="oth_type_tit">
        <legend align="center" class="oth_type_txt">其他方式登录</legend>
      </fieldset>
      <div class="oth_type_links">
        <a class="icon_type btn_qq sns-login-link" data-type="qq"><i class="btn_sns_icontype icon_default_qq"></i></a>
        <a class="icon_type btn_weibo sns-login-link" data-type="weibo"><i class="btn_sns_icontype icon_default_weibo"></i></a>
        <a class="icon_type btn_alipay sns-login-link" data-type="alipay"><i class="btn_sns_icontype icon_default_alipay"></i></a>
      </div>
      <div class="links">
        <a href="" class="register">立即注册</a>
        <a href="" class="forget">忘记密码？</a>
      </div>
    </div>
  </div>
  <div class="custom">
    <ul class="custom-list">
      <li>简体</li>
      <li>繁体</li>
      <li>English</li>
      <li>常见问题</li>
    </ul>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vButton from "base/vButton/vButton";

export default {
  data() {
    return {
      pwdVisable: false,
      userName: "",
      password: ""
    };
  },
  methods: {
    pwdVisableFn() {
      this.pwdVisable = !this.pwdVisable;
    },
    loginFn(events) {
      if (!this.userName || !this.password) {
        let options = {
          title: "提示",  // 默认标题为 "提示"
          btn: {
            text: "确定",
            style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
          }
        };
        this.$alert("请输入用户名密码", options);
        this.$store.state.isLogin = false;
      } else {
        this.$store.state.isLogin = true;
        if (this.$route.query.redirect) { // 跳转到指定链接
          this.$router.push({path: this.$route.query.redirect});
        } else {
          this.$router.push({path: "home"});
        }
      }
    }
  },
  components: {
    vButton: vButton
  }
};
</script>

<style lang="scss" scoped type="text/css">
.login{
  position: absolute;
  background-color: #eee;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  .login-wrapper{
    width: 100%;
    height: 100%;
    .logo-wrapper{
      padding: 40px 0 22px;
      text-align: center;
      .logo{
        width: 49px;
        height: 48px;
        margin: 0 auto 22px;
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        background-image:url(user-logo.png);
      }
      .title{
        font-size: 2rem;
        color: #424242;
        font-weight: normal;
      }
    }
    .login-content{
      input:focus{
        outline: none;
      }
      .login-user{
        display: block;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 16px 16px 0px 0px;
        @include border-1px(#c1b5b5);
        .account{
          width: 100%;
          padding: 12px 0;
          line-height: normal;
          display: block;
          font-size: 16px;
        }
      }
      .login-password{
        display: flex;
        padding: 0 10px;
        background-color: #fff;
        border-radius:  0px 0px 16px 16px;
        box-align: center;
        .password{
          flex: 1;
          padding: 12px 0;
          line-height: normal;
          display: block;
          font-size: 16px;
        }
        .pwd-visiable{
          padding: 12px 0px 0px 5px;
          .eye{
            width: 20px;
            height: 16px;
            display: block;
          }
        }
      }
    }
    .operate{
      padding-top: 24px;
    }
    .other{
      padding-top: 15px;
      .oth_type_tit{
        border-top: 1px dashed #bdbdbd;
        padding-top: 10px;
        .oth_type_links {
          font-size: 14px;
          padding-top: 10px;
          text-align: center;
          display: -webkit-box;
          display: box;
          -webkit-box-pack: center;
          box-pack: center;
        }
      }
      .oth_type_links {
          padding-top: 10px;
          text-align: center;
          display: -webkit-box;
          display: box;
          -webkit-box-pack: center;
          box-pack: center;
          .icon_type {
            width: 45px;
            height: 45px;
            margin: 0 10px;
            display: inline-block;
            text-indent: -9999px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -o-border-radius: 50%;
            border-radius: 50%;
            &.btn_qq {
              background-color: #0288d1;
            }
            &.btn_weibo {
              background-color: #d32f2f;
            }
            &.btn_alipay {
              background-color: #0ae;
            }
            .btn_sns_icontype {
              background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/iconstype_wap.png);
              display: block;
              background-size: auto 19px;
              width: 26px;
              height: 19px;
              background-size: auto 29px;
              width: 39px;
              height: 29px;
              margin: 8px auto 0;
              &.icon_default_qq {
                  background-position: 0 0;
              }
              &.icon_default_alipay {
                  background-position: -78px 0;
              }
              &.icon_default_alipay {
                  background-position: -78px 0;
              }
            }
          }
      }
      .links{
        padding: 40px 0 10px;
        text-align: center;
        color: #e0e0e0;
        a{
          display: inline-block;
          padding:0px 9px;
          font-size: 14px;
        }
        .register{
          border-right: solid 1px #757575;
        }
      }
    }
  }
  .custom{
    text-align: center;
    margin-top: -90px;
    font-size: 14px;
    color: #5D656B;
    .custom-list{
      li{
        display: inline-block;
        padding: 0 9px;
        border-right: solid 1px #757575;
      }
      & li:last-child{
        border-right: none;
      }
    }
  }
}
</style>


