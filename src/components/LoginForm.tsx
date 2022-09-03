import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { rules } from '../utils/rules'

const LoginForm = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth)
  const { login } = useActions()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    login(name, password)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={submit}
      // onFinishFailed={error}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      {error && (
        <p
          style={{
            color: 'red',
            textAlign: 'center',
            margin: '-15px 0 15px 0',
          }}
        >
          {error}
        </p>
      )}
      <Form.Item
        style={{ marginBottom: '0px' }}
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
