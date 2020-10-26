/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-10-24 15:59:47
 * @LastEditors: zhan
 * @LastEditTime: 2020-10-24 16:18:32
 */
import { request } from '~/utils/request'
import { LoginFormData } from './data'
/**
 * @description: 用户名 密码登录
 */
export const loginRequest = (params: LoginFormData) => {
  const { username, password } = params
  const scope = 'server'
  const grant_type = 'password'
  return request({
    url: '/api/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic ZW1wOmVtcA=='
    },
    method: 'post',
    params: { username, password, grant_type, scope }
  })
}
