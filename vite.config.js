import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 👇 Tell Vue: don't treat ion-icon as a Vue component
          isCustomElement: (tag) => tag === 'ion-icon'
        }
      }
    })
  ]
})
