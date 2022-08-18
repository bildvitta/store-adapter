import { GetStateParams, NamespacedState } from '../types'

/**
 * @example getState.call(this, { isPinia: true })
 * @example getState.call(this, { isPinia: false, resource: 'users' })
 */
export default function (this: NamespacedState, params: GetStateParams) {
  const { isPinia, resource } = params

  return isPinia ? this : this.state?.[resource]
}
