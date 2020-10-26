/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-03 10:32:58
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-04 16:36:56
 */

import { request } from '~/utils/request'
import { LoginParams, UserParams, LogoutParams, LogoutResult } from '../interface/user/login'

/** 登录接口 */
export const apiLogin = (params: LoginParams) => {
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic ZW1wOmVtcA=='
    },
    params: { username: params.username, password: params.password, grant_type: 'password', scope: 'server' }
  })
}
// /** 获取用户信息 */
// export const apiGetUser = (data: UserParams) => request('post', '/admin/user/info', data)

// /** 登出接口 */
export const apiLogout = (data: LogoutParams) =>
  request<LogoutResult>({
    url: '/auth/token/logout',
    method: 'delete'
  })
