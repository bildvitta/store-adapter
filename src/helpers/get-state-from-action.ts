import { GetStateFromActionParams, NamespacedState } from '../types'
import humps from 'humps'

/**
 * @example getState.call(this, { isPinia: true })
 * @example getState.call(this, { isPinia: false, resource: 'users' })
 */
export default function (this: NamespacedState, params: GetStateFromActionParams) {
  const { isPinia, resource } = params

  return isPinia ? this : this.state?.[humps.camelize(resource)]
}
