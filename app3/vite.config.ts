import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const { mode } = env
  return {
    plugins: [vue(), vueJsx(), VueDevTools()],
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    server: {
      port: 8083
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
