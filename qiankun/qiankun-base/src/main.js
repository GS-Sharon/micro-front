import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { Menu, MenuItem } from 'element-ui'
import { registerMicroApps, start } from 'qiankun';

Vue.use(Menu);
Vue.use(MenuItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'reactApp', // app name registered
    entry: '//localhost:10000',
    container: '#react',
    activeRule: '/react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:20000',
    container: '#vue',
    activeRule: '/vue',
  },
]);

start();
