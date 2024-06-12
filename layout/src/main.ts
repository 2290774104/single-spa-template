import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { registerApplication, start } from 'single-spa'

const creatScript = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)
  })
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
