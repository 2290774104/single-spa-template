import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const { mode } = env
  return {
    plugins: [react()],
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    server: {
      port: 8084,
    },
  };
});
