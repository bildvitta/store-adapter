import { StoreDefinition, StateTree } from 'pinia'
import { Dispatch, MapperForState } from 'vuex'

export type GetActionPayloadArgs = [unknown, unknown]

export interface GetStateParams {
  resource: string
  isPinia: boolean
}

export interface NamespacedState extends StateTree {
  state?: Record<string, unknown>
}

export interface GlobalStore {
  getters: Record<string, unknown>
  state: Record<string, Record<string, MapperForState>>
  dispatch: Dispatch
}

export interface GlobalNamespacedState {
  $piniaStore?: Record<string, Record<string, StoreDefinition>>
  $store?: GlobalStore
}

export interface StoreHandlerParams {
  entity: string
  key: string
  model: 'getters' | 'state'
  payload?: any
}
