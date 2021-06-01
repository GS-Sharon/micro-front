import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from "single-spa-vue"

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const appOptions = {
  el: '#vue',
  router,
  render: h => h(App)
};

//检测是作为子应用进行引用
if(window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10000/';
} else {
  delete appOptions.el;
	new Vue(appOptions).$mount("#app");
}

//用single-spa包装子应用
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})



// 协议接入，父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
