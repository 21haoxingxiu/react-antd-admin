import { Action } from 'redux'
import { SET_GLOBAL_ITEM } from './constants'
import { Device } from '~/interface/layout/index.interface'

export interface GlobalState {
  /** user's device */
  device: Device
  /** menu collapsed status */
  collapsed: boolean
  /** notification count */
  noticeCount: number
  /** user's language */
  locale: 'zh_CN' | 'en_US'
  /** Is first time to view the site ? */
  newUser: boolean
}

type SetGlobalItem = typeof SET_GLOBAL_ITEM

interface SetGloabalItem extends Action<SetGlobalItem> {
  payload: Partial<GlobalState>
}

export const setGlobalItem = (payload: Partial<GlobalState>): SetGloabalItem => ({
  type: SET_GLOBAL_ITEM,
  payload
})

export type GlobalActions = SetGloabalItem
