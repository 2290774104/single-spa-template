import axios from 'axios';
import Vue, { DirectiveOptions } from 'vue';

import 'normalize.css';

import '@/styles/index.scss'; // global css

import App from './App.vue';
import router from '@/router';

import '@/permission';
import '@/icons';

import * as filters from '@/filters';
import * as directives from '@/directives';

import plugin from '@/plugin';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import singleSpaVue from 'single-spa-vue';

// 注册过滤函数
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key]);
});
// 注册指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

Vue.use(plugin);
Vue.use(ElementUI);

Vue.config.productionTip = false;

const appOptions = {
  el: '#microApp',
  router,
  render: (h: any) => h(App)
};

const getConfig = async (fn?: Function) => {
  await axios
    .get('config.json')
    .then(res => {
      console.log(res);
      Object.defineProperty(Vue.prototype, '$config', { value: res.data });
      fn && fn();
    })
    .catch(err => {
      console.error(err, '项目初始化失败');
    });
};

const init = async () => {
  await getConfig(() => {
    // 单独运行
    if (!(window as any).singleSpaNavigate) {
      new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
    }
  });
};

init();

// 基于基座应用，导出生命周期函数
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
});

export function bootstrap(props: any) {
  console.log('app2 bootstrap');
  return vueLifecycle.bootstrap(() => {});
}

export function mount(props: any) {
  console.log('app2 mount');
  return vueLifecycle.mount(() => {});
}

export function unmount(props: any) {
  console.log('app2 unmount');
  return vueLifecycle.unmount(() => {});
}
