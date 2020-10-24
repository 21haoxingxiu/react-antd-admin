import React from 'react'
import ReactDOM from 'react-dom'
import { Spin } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { isHidden } from '~/utils'

import { Content } from './styles'

export const Loading: React.FC<SpinProps> = props => (
  <Content>
    <Spin size="large" tip="数据加载中..." {...props} />
  </Content>
)

let dom: HTMLElement | null
const GlobalLoading = {
  open(props: React.ComponentProps<typeof Spin> = {}): void {
    if (!dom) {
      dom = document.createElement('div')
      ReactDOM.render(<Loading {...props} />, dom)
      document.body.appendChild(dom)
    }
    if (isHidden(dom)) {
      dom.style.display = ''
    }
  },
  close(): void {
    dom!.style.display = 'none'
  },
  remove(): void {
    ReactDOM.unmountComponentAtNode(dom!)
    document.body.removeChild(dom!)
    dom = null
  }
}

export default GlobalLoading
