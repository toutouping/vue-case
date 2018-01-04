<template>
    <div class="userinfo">
      <div>
        <div class="title border-1px">VUE账号</div>
        <div class="user-content">
          <div class="user-wrapper border-1px">
            <span class="portrait icon-uniF1A1F9"></span>
            <div class="user-detail">
              <p class="name">请设置名字</p>
              <p class="acoount">1471809</p>
            </div>
          </div>
          <p class="security">安全等级75分存在1项风险</p>
        </div>
        <v-item-list>
          <v-item-header :item-header="'基本资料'"></v-item-header>
          <v-item @item-click="toUpdatePassword" :item-text="'账号密码'" :item-note="'修改'" :item-icon="'icon-uniF1BAF9'"></v-item>
          <v-item :item-text="'安全邮箱'" :item-note="'8767...@qq.com'" :item-icon="'icon-uniF1E5F9'"></v-item>
          <v-item :item-text="'安全手机'" :item-note="'1471....83'" :item-icon="'icon-uniF1FEF9'"></v-item>
          <v-item :item-text="'密保问题'" :item-note="'未设置'" :item-icon="'icon-uniF1FEF9'"></v-item>
        </v-item-list>
        <v-item-list>
          <v-item-header :item-header="'推荐使用'"></v-item-header>
          <v-item :item-text="'安全令牌'" :item-note="'开启'" :item-icon="'icon-uniF200F9'"></v-item>
        </v-item-list>
        <v-item-list>
          <v-item-header :item-header="'其它'"></v-item-header>
          <v-item :item-text="'修改个人资料'" :item-note="''" :item-icon="'icon-uniF200F9'"></v-item>
          <v-item :item-text="'绑定授权'" :item-note="''" :item-icon="'icon-uniF200F9'"></v-item>
      </v-item-list>
      <div class="logout"><v-button @btn-click="logoutFn" :type="'block'">退出</v-button></div>
    </div>
    <update-password ref="updatePassword"></update-password>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import vItemList from "base/vItemList/vItemList";
import vItem from "base/vItemList/vItem";
import vItemHeader from "base/vItemList/vItemHeader";
import updatePassword from "components/updatePassword/updatePassword";
import vButton from "base/vButton/vButton";

export default {
  created() {
    // setTimeout(() => {
    //   this._initScroll();
    // }, 20);
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() { // 实现滚动
      if (!this.itemScroll) {
        this.itemScroll = new BScroll(this.$el, {
          click: true
        });
      } else {
        this.itemScroll.refresh();
      }
    },
    toUpdatePassword(event) {
      if (!event._constructed) {
        return;
      }
      this.$refs.updatePassword.showFn();
    },
    logoutFn(event) {
      if (!event._constructed) {
        return;
      }
      this.$store.state.isLogin = false;
      this.$router.go({path: "/login"});
    }
  },
  components: {
    vItemList: vItemList,
    vItem: vItem,
    vItemHeader: vItemHeader,
    updatePassword: updatePassword,
    vButton: vButton
  }
};
</script>

<style lang="scss" scoped type="text/css">
.userinfo{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 42px;
  width: 100%;
  overflow: hidden;
  color: #333;
  .title{
    padding: 20px;
    height: 31px;
    font-size: 16px;
    line-height: 31px;
    color: #ff6a2a;
    font-weight: 700;
    background: #f6f6f6;
    @include border-1px(#f1f1f1);
  }
  .user-wrapper{
    padding: 10px 0;
    margin: 0 20px;
    font-size: 0px;
    display: flex;
    @include border-1px(#c8c7cc);
    .portrait{
      font-size: 40px;
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: solid 1px #7e7575;
      border-radius: 50%;
    }
    .user-detail{
      display: inline-block;
      margin-left: 10px;
      flex: 1;
      font-size: 14px;
      .name{
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .security{
    background-color: #fff;
    font-size: 16px;
    padding: 16px;
  }
  .logout{
    padding: 16px;
  }
}
</style>



