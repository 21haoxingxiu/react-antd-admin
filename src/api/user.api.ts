import { request } from '~/utils/request'
import { LoginFormData, LoginResult } from '~/interface/user/login'
/**
 * @description: 用户名 密码登录
 */
export const loginRequest = (params: LoginFormData) =>
  request<LoginResult>({
    url: '/api/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      Authorization: 'Basic ZW1wOmVtcA=='
    },
    method: 'post',
    params: { username: params.username, password: params.password, grant_type: 'password', scope: 'server' }
  })
