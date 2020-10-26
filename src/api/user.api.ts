/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-03 10:32:58
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-04 16:36:56
 */

import { request as service } from './request'
import { LoginParams, UserParams, LogoutParams, LogoutResult } from '../interface/user/login'

/** 登录接口 */
export const apiLogin = (params: LoginParams) => {
  return service('post', '/auth/oauth/token', params, {
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic ZW1wOmVtcA=='
    }
  })
}
/** 获取用户信息 */
export const apiGetUser = (data: UserParams) => service('post', '/admin/user/info', data)

/** 登出接口 */
export const apiLogout = (data: LogoutParams) => service<LogoutResult>('post', '/user/logout', data)
