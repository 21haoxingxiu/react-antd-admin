import React from 'react'
import { connect } from 'react-redux'
// import { renderRoutes, RouteConfig } from 'react-router-config'
// import { useHistory } from 'react-router-dom'
// import { forceCheck } from 'react-lazyload'
import { Form, Input, Button } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserOutlined, LockTwoTone } from '@ant-design/icons'
import { LoginFormData } from '~/interface/user/login'
import { Content, Header } from './styles'
import { loginAction } from '~/stores/user/actionCreators'

interface LoginProps {
  loginDispatch: (params: LoginFormData) => void
}

const Login: React.FC<LoginProps> = ({ loginDispatch }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleSubmit = async (values: LoginFormData) => {
    const result = await loginDispatch(values)
    // const history = useHistory()
    // history.push('/home')
    /* if(result)  无法测试其真实性 */
    if (result !== null) {
      const { from } = (location.state as any) || { from: { pathname: '/dashboard' } }
      navigate(from)
    }
  }
  return (
    <Content>
      <Header>
        <span className="title">React 后台应用</span>
      </Header>
      <div className="desc is-center">管理系统 React 应用模版</div>
      <div className="content">
        <Form
          size="large"
          onFinish={values => {
            handleSubmit(values as LoginFormData)
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="login-prefix-icon" />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input.Password prefix={<LockTwoTone className="login-prefix-icon" />} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}
// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginDispatch(params: LoginFormData) {
      dispatch(loginAction(params))
    }
  }
}

// 将ui组件包装成容器组件
export default connect(mapDispatchToProps)(React.memo(Login))
