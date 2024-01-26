import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteSSR({
      build: {
        keepIndexHtml: true, //是否保留打包后client中的index页面
      },
    }),
    vue()
  ]
})
