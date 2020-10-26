/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 08:36:40
 * @LastEditors: zhan
 * @LastEditTime: 2020-10-24 16:21:35
 */
import * as actionTypes from './constants'
import { LoginFormData } from './data.d'
import { loginRequest } from './services'
import { ThunkAction } from 'redux-thunk'
import { setToken } from '~/utils/store'
import { AppState } from '~/stores'

export interface LoginType {
  type: typeof actionTypes.LOGIN
  data: LoginFormData
}
export interface ChangeEnterLoadingType {
  type: typeof actionTypes.CHANGE_ENTER_LOADING
  data: boolean
}

export const changeEnterLoadingAction = (data: boolean): ChangeEnterLoadingType => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const loginDispatch = (
  param: LoginFormData
): ThunkAction<Promise<boolean>, AppState, null, ChangeEnterLoadingType> => {
  return async (dispatch: any) => {
    dispatch(changeEnterLoadingAction(true))
    const res = await loginRequest(param)
    if (res) {
      if (res.data && res.data.access_token) {
        setToken(res.data.access_token)
        dispatch(changeEnterLoadingAction(false))
      }
      return true
    }
    return false
  }
}
