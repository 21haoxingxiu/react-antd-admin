/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-03 10:32:58
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-04 16:38:08
 */
import axios, { AxiosRequestConfig } from 'axios'
import { message as $message } from 'antd'

let baseURL
// 判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURL = '/'
} else {
  // 编译环境
  baseURL = window.Glod && window.Glod.BaseUrl
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    contentType: 'application/jsoncharset=utf-8'
  }
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  config => {
    if (config?.data?.message) {
      // $message.success(config.data.message)
    }
    return config?.data
  },
  error => {
    let errorMessage = '系统异常'
    if (error?.message?.includes('Network Error')) {
      errorMessage = '网络错误，请检查您的网络'
    }
    console.dir(error)
    error.message && $message.error(errorMessage)
    return {
      status: false,
      message: errorMessage,
      result: null
    }
  }
)

export type Response<T = any> = {
  status: boolean
  message: string
  result: T
}

type Method = 'get' | 'post'

export type MyResponse<T = any> = Promise<Response<T>>

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  method: Method,
  url: string,
  data?: any,
  params?: any,
  config?: AxiosRequestConfig
): MyResponse<T> => {
  // const prefix = '/api'
  const prefix = ''
  url = prefix + url
  if (method === 'post') {
    console.log('params', data || params)
    return service.post(url, data || params, config)
  } else {
    return service.get(url, {
      params: data,
      ...config
    })
  }
}
