import { App } from 'vue'
import { DefineGlobalPiniaStoreOptions, PiniaStore } from '../types'

/**
 * Adiciona uma variável global "$piniaStore" para ter acesso as stores sem ter que importar elas.
 *
 * @example app.use(DefineGlobalPiniaStore, { stores: { myUsersStore } })
 *
 * Desta forma em nossa aplicação Vue, considerate que o "id" de "myUserStore" seja "users" 
 * poderíamos acessar a store "myUserStore" da seguinte maneira:
 *
 * @example this.$piniaStore.users.list // retorna o state list de users
*/
export default {
  install (
    app: App, options: DefineGlobalPiniaStoreOptions
  ): void {
    const piniaStore: PiniaStore = {}

    for (const key in options.stores) {
      piniaStore[key] = options.stores[key]?.()
    }

    const hasPiniaStore = !!Object.keys(app.config.globalProperties.$piniaStore || {}).length

    if (hasPiniaStore) {
      Object.assign(app.config.globalProperties.$piniaStore, piniaStore)
      return
    }

    app.config.globalProperties.$piniaStore = piniaStore
  }
}
