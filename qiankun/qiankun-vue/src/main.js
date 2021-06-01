import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null;
function render(props) {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#app')
}

// 检测到独立运行的时候
if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props)
  render(props);
}

export async function unmount() {
  //销毁子应用
  instance.$destroy();
}