/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-10-24 16:12:19
 * @LastEditors: zhan
 * @LastEditTime: 2020-10-24 16:20:09
 */
export function isHidden(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el)
  return style.display === 'none'
}
