import { SET_USER_ITEM } from './constants'
import { LoginFormData } from '~/interface/user/login'
import { MenuChild } from '~/interface/layout/menu.interface'
import { loginRequest } from '~/api/user.api'
import { ThunkAction } from 'redux-thunk'
import { setToken } from '~/utils/store'
import { AppState } from '~/stores'
import { Action } from 'redux'

type SET_USER_ITEM_TYPE = typeof SET_USER_ITEM

export interface UserState {
  username: string
  token: string
  menuList: MenuChild[]
  logged: boolean
  role: string
}

interface SetUserItem extends Action<SET_USER_ITEM_TYPE> {
  payload: Partial<UserState>
}

export const setUserItem = (payload: Partial<UserState>): SetUserItem => ({
  type: SET_USER_ITEM,
  payload
})

export type UserActions = SetUserItem

export const loginAction = (param: LoginFormData): ThunkAction<Promise<boolean>, AppState, null, SetUserItem> => {
  return async (dispatch: any) => {
    const res = await loginRequest(param)
    if (res) {
      if (res.data && res.data.access_token) {
        setToken(res.data.access_token)
        dispatch(setUserItem)
      }
      return true
    }
    return false
  }
}
