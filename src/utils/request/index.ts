import createAxiosInstance from './axios'
import { AxiosRequestConfig } from 'axios'
type Methods = 'get' | 'post' | 'put' | 'delete'

export type Response<T = any> = {
  status?: number
  message?: string
  result?: T
  data?: any
}

export interface RequestInter {
  method: Methods
  url: string
  headers?: Record<string, any>
  data?: any
  params?: any
  config?: AxiosRequestConfig
}

export type MyResponse<T = any> = Promise<Response<T>>

const instance = createAxiosInstance('', true)

export const request = <T = any>(request: RequestInter): MyResponse<T> => {
  return instance(request)
}
