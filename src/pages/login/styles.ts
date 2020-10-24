/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-10-24 15:59:47
 * @LastEditors: zhan
 * @LastEditTime: 2020-10-24 16:19:17
 */
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  .desc {
    margin-top: 12px;
    color: rgba(0, 0, 0, 0.45);
  }
  .content {
    padding: 32px 0;
    width: 320px;
  }
  .login-prefix-icon {
    font-size: 14px;
    color: #1890ff;
  }
`

export const Header = styled.div`
  height: 44px;
  text-align: center;
  line-height: 44px;
  a {
    text-decoration: none;
  }
  .title {
    font-weight: 600;
    font-size: 30px;
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.85);
  }
`
