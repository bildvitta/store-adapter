import { App } from 'vue'
import { StoreDefinition, StateTree } from 'pinia'

/**
 * Adiciona uma variável global "$piniaStore" para ter acesso as stores sem ter que importar elas.
 *
 * @example app.use(defineGlobalPiniaStore, { stores: [myUsersStore()] })
 *
 * Desta forma em nossa aplicação Vue, considerate que o "id" de "myUserStore" seja "users" 
 * poderíamos acessar a store "myUserStore" da seguinte maneira:
 *
 * @example this.$piniaStore.users.list // retorna o state list de users
*/
export default {
  install <S extends StateTree, G, A> (
    app: App, options: Record<'stores', StoreDefinition<string, S, G, A>[]>
  ): void {
    const piniaStore: Record<string, StoreDefinition<string, S, G, A>> = {}

    for (const store of options.stores) {
      piniaStore[store.$id] = store
    }

    const hasPiniaStore = !!Object.keys(app.config.globalProperties.$piniaStore).length

    if (hasPiniaStore) {
      Object.assign(app.config.globalProperties.$piniaStore, piniaStore)
      return
    }

    app.config.globalProperties.$piniaStore = piniaStore
  }
}
