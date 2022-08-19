import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'ES6',
    lib: {
      formats: ['es'],
      entry: 'src/index.ts',
      name: 'index',
      fileName: 'index'
    },
    sourcemap: true
  },
  plugins: [dts({
    rollupTypes: true
  })]
})
