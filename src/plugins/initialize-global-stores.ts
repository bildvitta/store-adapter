import { App } from 'vue'

/**
 * Inicializa variáveis globais "$store" e "$piniaStore" mesmo que não estejam utilizando
 * assim resolve o problema de warning no template (view).
 *
 * @example app.use(InitializeGlobalStores)
*/
export default {
  install (
    app: App
  ): void {
    const store = app.config.globalProperties.$store
    const piniaStore = app.config.globalProperties.$piniaStore

    if (!store) {
      app.config.globalProperties.$store = undefined
    }

    if (!piniaStore) {
      app.config.globalProperties.$piniaStore = undefined
    }
  }
}
