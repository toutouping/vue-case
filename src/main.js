import Vue from "vue";
import router from "./router";
import VueResource from "vue-resource";
import VueLazyload from "vue-lazyload";
import App from "./App";
import store from "common/js/store";
import i18n from "base/language";

import "common/css/index.scss";

// 注册
import {Alert, Confirm, Toast, Loading} from "base/messagebox";
import Directive from "base/messagebox/directive";
Vue.use(Directive);
Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(VueResource);
Vue.use(VueLazyload, {
  loading: require("common/image/default.png")
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  i18n,
  linkActiveClass: "active",    // 这个属性是设置当前被点击的a标签class名，为了方便设置选中项的样式
  template: "<App/>",
  components: { App }
});
