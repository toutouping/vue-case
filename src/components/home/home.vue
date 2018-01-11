<template>
  <div class="home">
    <div class="header">
      <div class="header-wrapper">
        <div class="header-left">
          <span class="logo" @click="showSetting"></span>
        </div>
        <div class="header-middle">
            <search-box ref="searchBox" placeholder="搜索"></search-box>
        </div>
        <div class="header-right">
            <span class="user icon-uniF0C9F9"></span>
        </div>
      </div>
      <hor-menu v-if="navList.length>0" @nav-change="changeNav" :nav-list="navList" :default-tab="showTab"></hor-menu>
    </div>
    <transition name="setting">
      <div v-show="userSettingShow" class="user-setting">
        <div class="mask" @click="hideSetting"></div>
        <div class="setting-wrapper">
          <div class="setting-content">
            <div class="setting-header">
              <div class="setting-logo" ref="settingLogo"></div>
              <p class="user-name" ref="userName">从未长大</p>
            </div>
            <ul class="menu-list" ref="menuList">
              <li>
                <i class="icon-uniF083F9"></i>
                <span>形成</span>
              </li>
              <li>
                <i class="icon-uniF133F9"></i>
                <span>钱包</span>
              </li>
              <li>
                <i class="icon-uniF1B3F9"></i>
                <span>客服</span>
              </li>
              <li>
                <i class="icon-uniF1E5F9"></i>
                <span>设置</span>
              </li>
            </ul>
          </div>
          <div class="other-content" :class="settingStatus" :style="otherContentStyle" ref="otherContent">
            <span class="triangle"></span>
            <ul class="other-list">
              <li><i class="icon-uniF083F9"></i><p><a href="/bai"> 推荐有奖</a></p></li>
              <li><i class="icon-uniF083F9"></i><p>车主招募</p></li>
              <li><i class="icon-uniF083F9"></i><p>积分商城</p></li>
              <li><i class="icon-uniF083F9"></i><p>滴滴公益</p></li>
              <li><i class="icon-uniF083F9"></i><p>兑换</p></li>
              <li><i class="icon-uniF083F9"></i><p>办银行卡</p></li>
              <li><i class="icon-uniF083F9"></i><p>企业版</p></li>
              <li><i class="icon-uniF083F9"></i><p>办手机卡</p></li>
              <li><i class="icon-uniF083F9"></i><p>保险车险</p></li>
              <li><i class="icon-uniF083F9"></i><p>流量中心</p></li>
              <li><i class="icon-uniF083F9"></i><p>买红包</p></li>
              <li><i class="icon-uniF083F9"></i><p>手机充值</p></li>
              <li><i class="icon-uniF083F9"></i><p>车商入驻</p></li>
            </ul>
            <p class="law">法律条款与隐私政策<i class="icon-keyboard_arrow_rightF9"></i></p>
          </div>

        </div>
      </div>
    </transition>
    <div class="body-content">
      <div class="tab-content" v-if="showTab === 0">
        <slider v-if="sliderList.length>0">
          <div v-for="item in sliderList">
            <a :href="item.img_url">
              <img @load="loadImage" :src="item.img_url">
            </a>
          </div>
        </slider>
      </div>
      <div class="tab-content" v-if="showTab === 1">
        <index-list v-if="indexList.length>0" class="index-list-wrapper" ref="lal" :title="indexListTitle" :data="indexData" @select="indexListSelect" @title-click="indexListClick"></index-list>
      </div>
      <div class="tab-content" v-if="showTab === 2">
        <image-load v-if="imageLoadList.length>0" :disc-list="imageLoadList"></image-load>
      </div>
      <div class="tab-content btn-content" v-if="showTab === 3">
        <!-- <scroll :click="true" :probe-type="3"> -->
          <h2>1、Basic Usage</h2>
          <p><v-button @btn-click="clickFn" :color="'light'">Light</v-button></p>
          <p><v-button >Default</v-button></p>
          <p><v-button :color="'secondary'">Secondary</v-button></p>
          <p><v-button :color="'danger'">Danger</v-button></p>
          <p><v-button :color="'dark'">Dark</v-button></p>
          <h2>2、Outline Style</h2>
          <p><v-button :color="'light'" :type="'outline'">Light</v-button></p>
          <p><v-button :type="'outline'">Default</v-button></p>
          <p><v-button :color="'secondary'" :type="'outline'">Secondary</v-button></p>
          <p><v-button :color="'danger'" :type="'outline'">Danger</v-button></p>
          <p><v-button :color="'dark'" :type="'outline'">Dark</v-button></p>
          <h2>3、Clear Style</h2>
          <p><v-button :color="'light'" :type="'clear'">Light</v-button></p>
          <p><v-button :type="'clear'">Default</v-button></p>
          <p><v-button :color="'secondary'" :type="'clear'">Secondary</v-button></p>
          <p><v-button :color="'danger'" :type="'clear'">Danger</v-button></p>
          <p><v-button :color="'dark'" :type="'clear'">Dark</v-button></p>
          <h2>4、Round Buttons</h2>
          <p><v-button :color="'light'" :type="'round'">Light</v-button></p>
          <p><v-button :type="'round'">Default</v-button></p>
          <p><v-button :color="'secondary'" :type="'round'">Secondary</v-button></p>
          <p><v-button :color="'danger'" :type="'round'">Danger</v-button></p>
          <p><v-button :color="'dark'" :type="'round'">Dark</v-button></p>
          <h2>5、Block Buttons</h2>
          <v-button :color="'light'" :type="'block'">Light</v-button></p>
          <v-button :type="'block'">Default</v-button></p>
          <v-button :color="'secondary'" :type="'block'">Secondary</v-button></p>
          <v-button :color="'danger'" :type="'block'">Danger</v-button></p>
          <v-button :color="'dark'" :type="'block'">Dark</v-button></p>
          <h2>Full Buttons</h2>
          <p><v-button :color="'light'" :type="'full'">Light</v-button></p>
          <p><v-button :type="'full'">Default</v-button></p>
          <p><v-button :color="'secondary'" :type="'full'">Secondary</v-button></p>
          <p><v-button :color="'danger'" :type="'full'">Danger</v-button></p>
          <p><v-button :color="'dark'" :type="'full'">Dark</v-button></p>
          <h2>6、Button Sizes</h2>
          <p><v-button :color="'light'" :size="'small'">small</v-button></p>
          <p><v-button>Default Medium</v-button></p>
          <p><v-button :color="'danger'" :size="'large'">Secondary Large</v-button></p>
          <h2>7、Icon Buttons</h2></p>
          <p><v-button><span class="usr icon-uniF0C9F9"></span>Icon Buttons</v-button></p>
        <!-- </scroll> -->
      </div>
      <div class="tab-content" v-if="showTab === 4">
        <p><v-button @btn-click="alertFn" :type="'block'">提示（自定义样式）</v-button></p>
        <p><v-button @btn-click="confirmFn" :type="'block'" :color="'secondary'">确认（默认样式）</v-button></p>
        <p><v-button @btn-click="toastFn" :type="'block'" :color="'light'">面包片（默认样式）</v-button></p>
        <p><v-button @btn-click="loadingFn" :type="'block'" :color="'danger'">Loading框</v-button></p>
      </div>
      <div class="tab-content lazy-content" v-if="showTab === 5">
        <lazy-scroll></lazy-scroll>
      </div>
      <div class="tab-content lang-content" v-if="showTab === 6">
          <p><v-button @btn-click="chooseLanguageFn('zh')" :color="'light'">中文</v-button></p>
          <p><v-button @btn-click="chooseLanguageFn('en')">English</v-button></p>
          <div class="show-lang-txt">{{getLangulageTxt}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import scroll from "base/scroll/scroll.vue";
import Slider from "base/slider/slider";
import searchBox from "base/searchBox/searchBox";
import horMenu from "base/horMenu/horMenu";
import indexList from "base/indexList/indexList";
import vButton from "base/vButton/vButton";
import wxAlert from "base/messagebox/tpls/wxAlert";
import lazyScroll from "components/lazyScroll/lazyScroll";
import imageLoad from "components/imageLoad/imageLoad";

const SETTING_TOP = 60;
const SETTING_BOTTOM = 110;
const OTHER_STYLE = "height:calc(100vh - " + SETTING_TOP + "px);top:-" + SETTING_BOTTOM + "px";
export default {
  data() {
    return {
      sliderList: [],
      navList: [],
      indexListTitle: "",
      indexList: [],
      imageLoadList: [],
      showTab: 0,
      userSettingShow: false,
      settingStatus: "down",
      otherContentStyle: OTHER_STYLE
    };
  },
  mounted () {
    this._getData(); // 初始化数据
  },
  computed: {
    indexData() {
      let ret = [];
      this.indexList.forEach((itemGroup) => {
        let group = {};
        group.name = itemGroup.name;
        group.items = [];
        itemGroup.items.forEach((indexItem) => {
          let item = {};
          item.name = indexItem.name;
          item.value = indexItem.itemId;
          group.items.push(item);
        });
        ret.push(group);
      });
      return ret;
    },
    getLangulageTxt() {
      return this.$i18n.t("navigator.doc");
    }
  },
  methods: {
    loadingFn() {
      this.$loading.show();
      setTimeout(() => {
        this.$loading.hide();
      }, 2000);
    },
    clickFn() {
      console.log("clickFn");
    },
    alertFn() {  // 已经注册为全局组件(base/wc-messagebox)，固可以直接使用$alert
      this.$alert({
        content: "你好呀",
        component: {
          wxAlert
        }
      });
      this.$alert({
        title: "提示",
        content: "这里是内容",
        btnText: "确定",
        component: {} // 可不设置, 适用于用户自定义组件.
      }).then().catch();
    },
    confirmFn() {
      this.$confirm("成功弹出提示框", {
        title: "确认",
        yesStyle: {}, // 设置左边按钮样式
        yesText: "",  // 左边按钮文本,
        noStyle: {},  // 设置右边按钮样式,
        noText: "",   // 设置右边按钮文本
        component: {} // 可不设置, 适用于用户自定义组件.
      }).then((result) => {
        if (result === "success") {
          console.log("确认");
        } else {
          console.log("取消");
        }
      // }).catch(() => {
      //   console.log("异常");
      });
    },
    chooseLanguageFn(lang) {
      this.$i18n.locale = lang;
    },
    toastFn() {
      console.log("toastFn");
      this.$toast("登录成功", {
        durtaion: 1000,
        location: "top" // 如果不传递, 默认在底部, 如果传递, 就必须要有值
      });
    },
    indexListSelect(item) {
      console.log(item);
    },
    indexListClick(title) {
      console.log(title);
    },
    showSetting() {
      this.userSettingShow = true;
      this.otherContentStyle = "height:calc(100vh - " + SETTING_TOP + "px);top:" + -SETTING_BOTTOM + "px";
      this.$nextTick(() => {
        this._otherContentMove();
        this._resetSettingStatus();
      });
    },
    hideSetting() {
      this.userSettingShow = false;
    },
    _getData() {
      this.$http.get("data.json").then(response => {
        response = response["body"];
        if (response && response.code === 0) {
          this.navList = [];
          this.sliderList = [];
          let navArray = response.data && response.data.tabs;
          for (let i = 0; i < navArray.length; i++) {
            this.navList.push(navArray[i].name);
          }
          let sliderArray = response.data && response.data.items;
          for (let i = 0; i < sliderArray.length; i++) {
            this.sliderList.push(sliderArray[i]);
          }
          this.indexList = response.data.indexList;
          this.imageLoadList = response.data.imageLoadList;
        }
      });
    },
    _resetSettingStatus() {
      let otherContent = this.$refs.otherContent;
      let dHeight = document.documentElement.clientHeight;
      let diff = parseInt(otherContent.style.top) + SETTING_BOTTOM;
      // logo
      let logoWH = (1 + diff / (dHeight - SETTING_TOP)) > 0 ? (1 + diff / (dHeight - SETTING_TOP)) * 15 + 25 : 25;
      this.$refs.settingLogo.style.width = logoWH + "px";
      this.$refs.settingLogo.style.height = logoWH + "px";
      // user name
      let userOpacity = (1 + diff / (dHeight - 225)) > 0 ? (1 + diff / (dHeight - 225)) : 0;
      let userFontSize = (16 + diff / (dHeight - 225) / 16) > 0 ? (16 + diff / (dHeight - 225) / 16) : 0;
      this.$refs.userName.style.opacity = userOpacity;
      this.$refs.userName.style["font-size"] = userFontSize + "px";
      // list
      let listOpacity = (1 + diff / (dHeight - 100)) > 0 ? (1 + diff / (dHeight - 100)) : 0;
      this.$refs.menuList.style.opacity = listOpacity;
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
      }
    },
    changeNav(event, navIndex) {
      this.showTab = navIndex;
    },
    _otherContentMove() {
      let ths = this;
      let dHeight = document.documentElement.clientHeight;
      let otherContent = ths.$refs.otherContent;
      let touchStartY = null;
      let touchEndY = null;
      let timeInter = 0;
      let otherContentStartTop = null;
      let tarchStartFn = () => {
        clearInterval(timeInter);
        otherContentStartTop = otherContent.offsetTop;
        let startTouch = event.targetTouches[0];
        touchStartY = startTouch.pageY;
        otherContent.addEventListener("touchmove", function(event) {
          tarchMoveFn();
        }, false);
      };

      let tarchMoveFn = () => {
        clearInterval(timeInter);
        if (event.targetTouches.length === 1) {
          event.preventDefault();
          let touch = event.targetTouches[0];
          let topTemp = otherContentStartTop - dHeight + touch.pageY - touchStartY;
          if (topTemp > (-dHeight + SETTING_TOP) && topTemp < -SETTING_BOTTOM) {
            ths.otherContentStyle = "height:calc(100vh - " + SETTING_TOP + "px);top:" + topTemp + "px";
            ths._resetSettingStatus();
          }
        }
      };

      otherContent.addEventListener("touchstart", tarchStartFn);
      otherContent.addEventListener("touchend", function() {
        otherContent.removeEventListener("touchstart", tarchStartFn);
        otherContent.removeEventListener("touchmove", tarchMoveFn);
        touchEndY = event.changedTouches[0];
        timeInter = setInterval(() => {
          var otherContentTop = parseInt(otherContent.style.top);
          if (otherContentTop < -SETTING_BOTTOM && touchEndY.pageY > dHeight / 2) {
            ths.otherContentStyle = "height:calc(100vh - " + SETTING_TOP + "px);top:" + (otherContentTop + 2) + "px";
          } else if (otherContentTop > -dHeight + SETTING_TOP && touchEndY.pageY < dHeight / 2) {
            ths.otherContentStyle = "height:calc(100vh - " + SETTING_TOP + "px);top:" + (otherContentTop - 2) + "px";
          } else {
            clearInterval(timeInter);
            if (touchEndY.pageY > dHeight / 2) {
              ths.settingStatus = "down";
            } else {
              ths.settingStatus = "up";
            }
          }
          ths._resetSettingStatus();
        }, 1);
      });
    }
  },
  components: {
    searchBox: searchBox,
    horMenu: horMenu,
    Slider: Slider,
    indexList: indexList,
    imageLoad: imageLoad,
    vButton: vButton,
    lazyScroll: lazyScroll
  }
};
</script>

<style lang="scss" scoped type="text/css">
.home{
  position: relative;
  height: 100%;
  width: 100%;
  .header{
    background-color: #f2f2f2;
    .header-wrapper{
      height: 50px;
      display: flex;
      .header-left{
        display: flex;
        align-items: center;
        .logo{
          display: inline-block;
          width: 30px;
          height: 30px;
          margin: 0px 10px;
          background-image: url("user-logo.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .header-middle{
        display: flex;
        flex: 1;
        align-items: center;
        .search-box{
        }
      }
      .header-right{
        display: flex;
        align-items: center;
        .user{
          display: inline-block;
          margin: 0px 10px;
          font-size: 20px;
        }
      }
    }
  }
  .user-setting{
    position: fixed;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    z-index: 100;
    .mask{
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(10px);
      background: rgba(7,17,27,0.3);
      transition: all 0.2s linear;
    }
    .setting-wrapper{
      position: absolute;
      display: inline-block;
      height: 100vh;
      transition: all 0.2s linear;
      .setting-content{
        position: relative;
        box-sizing: border-box;
        width: 220px;
        height: 100%;
        max-width: 100vw;
        padding: 30px 0px;
        background: #fff;
        .setting-header{
          text-align: center;
          .setting-logo{
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0px 10px;
            padding-bottom: 8px;
            background-image: url("user-logo.png");
            background-size: contain;
            background-repeat: no-repeat;
          }
          .user-name{
            font-size: 16px;
            font-weight: bold;
          }
        }
        .menu-list{
          padding: 50px 20px 0px 20px;
          li{
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            i{
              margin-right: 6px;
            }
          }
        }
      }
      .other-content{
        display: inline-block;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        width: 220px;
        font-size: 0px;
        background: #fff;
        padding: 20px 10px 0 10px;
        .triangle{
          display: inline-block;
          border-left: solid 6px transparent;
          border-right: solid 6px transparent;
        }
        .triangle{
          border-top: transparent;
          border-bottom: solid 6px #999;
        }
        &.up{
          .triangle{
            border-top: solid 6px #999;
            border-bottom: transparent;
          }
        }
        &.down{
          .triangle{
            border-top: transparent;
            border-bottom: solid 6px #999;
          }
        }
        .other-list{
          text-align: left;
          li{
            display: inline-block;
            text-align: center;
            vertical-align: top;
            font-size: 12px;
            width: 56px;
            padding: 20px 5px;
            color: #333;
            i{
              font-size: 20px;
              color: #999;
            }
            p{
              line-height: 20px;
            }
          }
        }
        .law{
          position: absolute;
          margin: 0 auto;
          font-size: 12px;
          width: 100%;
          color: #999;
          bottom: 20px;
        }
      }
    }
    &.setting-enter-active,
    &.setting-leave-active {
      transition: all 0.5s linear;
    }
    &.setting-enter-to,
    &.setting-leave {
      .mask{
        opacity: 1;
      }
      .setting-wrapper{
        transform: translate3d(0, 0, 0);
      }
    }
    &.setting-enter,
    &.setting-leave-to {
      .mask{
        opacity: 0;
      }
      .setting-wrapper{
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
  .body-content{
    position: relative;
    width: 100%;
    height: calc(100vh - 126px);
    background: #fff;
    overflow: hidden;
    .tab-content{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
    .btn-content{
      padding: 20px;
      overflow-x: auto;
      h2{
        font-size: 20px;
        line-height: 2;
      }
      .button{
        .usr{
          font-size: 1.4rem;
          line-height: .67;
          pointer-events: none;
          padding-right: .4em;
        }
      }
    }
    .lazy-content{
      position: relative;
      width: 100%;
      height: calc(100vh - 126px);
      background: #fff;
      overflow: hidden;
    }
    .lang-content{
      .show-lang-txt{
        padding: 20px;
        font-size: 20px;
      }
    }
  }
}
</style>
