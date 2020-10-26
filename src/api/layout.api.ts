import { request } from '~/utils/request'
import { MenuList } from '../interface/layout/menu.interface'
import { Notice } from '~/interface/layout/notice.interface'
import { AxiosRequestConfig } from 'axios'

/** 获取菜单列表接口 */
export const getMenuList = (config: AxiosRequestConfig = {}) =>
  request<MenuList>({
    url: '/api/admin/menu',
    method: 'get'
  })

/** 获取通知列表接口 */
// export const getNoticeList = (config: AxiosRequestConfig = {}) => request<Notice[]>('get', '/user/notice', {}, config)
