import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import GlobalLoading from '~/components/GlobalLoading'
import { filterObject } from '../filter'
import { getToken, removeToken } from '~/utils/store'
import { message as $message } from 'antd'

// 处理请求 loading
let loadingCount = 0
function loadingInterceptors(instance: AxiosInstance): void {
  // 打开 loading
  const openLoading = (config: AxiosRequestConfig): AxiosRequestConfig => {
    GlobalLoading.open()
    loadingCount++
    /* 携带token */
    console.log('getToken()', getToken())
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  }
  // 关闭 loading
  const closeLoading = () => {
    loadingCount--
    if (loadingCount < 0) {
      loadingCount = 0
    }
    loadingCount === 0 && GlobalLoading.close()
  }

  instance.interceptors.request.use(openLoading)
  instance.interceptors.response.use(
    response => {
      const status = Number(response.status) || 200
      if (status === 401) {
        /* 返回登录页 */
        removeToken()
      }
      closeLoading()
      return response
    },
    e => {
      console.log('e', e)
      const errorMessage = '操作失败，请重新再试'
      closeLoading()
      $message.error(errorMessage)
      throw e
    }
  )
}

// 过滤请求参数中的 null undefined ''
function filterInterceptors(instance: AxiosInstance): void {
  const filter = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.data) {
      config.data = filterObject(config.data)
    }
    if (config.params) {
      config.params = filterObject(config.params)
    }
    return config
  }
  instance.interceptors.request.use(filter)
}

export default function createAxiosInstance(baseURL = '', isLoading = false): AxiosInstance {
  const instance = axios.create({ baseURL })
  filterInterceptors(instance)
  isLoading && loadingInterceptors(instance)
  return instance
}
