import Vue from "vue";
import LoadingContainer from "./tpl";

let instance;
let LoadingConstructor = Vue.extend(LoadingContainer);

let initInstance = () => {
  instance = new LoadingConstructor({
    el: document.createElement("div")
  });
  document.body.appendChild(instance.$el);

  instance.show = true;
};

let hideLoading = () => {
  instance.show = false;
};

export default {
  install(Vue, options = {}) {
    Vue.prototype.$loading = {
      "show": initInstance,
      "hide": hideLoading
    };
  }
};
