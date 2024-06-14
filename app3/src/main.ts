import './assets/main.css'

import { createApp, h } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import singleSpaVue from 'single-spa-vue'

// 单独运行
if (!(window as any).singleSpaNavigate) {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

// 基于基座应用，导出生命周期函数
const vueLifecycle = singleSpaVue({
  createApp,
  appOptions: {
    el: '#microApp',
    render() {
        return h(App, {
            name: this.name
        })
    }
  },
  handleInstance(app) {
    app.use(createPinia())
    app.use(router)
  }
})

// export const vueLifecycle.

export const bootstrap = vueLifecycle.bootstrap
export const mount = vueLifecycle.mount
export const unmount = vueLifecycle.unmount
