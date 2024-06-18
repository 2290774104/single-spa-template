import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'

import { registerApplication, start } from 'single-spa'

const createScript = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)
  })
}

function loadVue2App(url: string, globalVar: string) {
  // 支持远程加载子应用
  return async () => {
    await createScript(url + '/js/chunk-vendors.js')
    await createScript(url + '/js/app.js')
    // 这里的return很重要，需要从这个全局对象中拿到子应用暴露出来的生命周期函数
    return window[globalVar as keyof typeof window]
  }
}

function loadVue3App(url: string) {
  return async () => {
    return import(`${url}/src/main.ts`)
  }
}

function loadReactApp(url: string) {
  return async () => {
    return import(url + '/src/main.tsx')
  }
}

const apps = [
  {
    name: 'app1',
    app: loadVue2App('http://localhost:8081/app1', 'app1'),
    activeWhen: (location: any) => location.pathname.startsWith('/app1'),
    customProps: {}
  },
  {
    name: 'app2',
    app: loadVue2App('http://localhost:8082/app2', 'app2'),
    activeWhen: (location: any) => location.pathname.startsWith('/app2'),
    customProps: {}
  },
  {
    name: 'app3',
    app: loadVue3App('http://localhost:8083/app3'),
    activeWhen: (location: any) => location.pathname.startsWith('/app3'),
    customProps: {}
  },
  {
    name: 'app4',
    app: loadReactApp('http://localhost:8084/app4'),
    activeWhen: (location: any) => location.pathname.startsWith('/app4'),
    customProps: {}
  }
]

// 注册子应用
for (let i = apps.length - 1; i >= 0; i--) {
  registerApplication(apps[i])
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

start()
