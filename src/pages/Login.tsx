import { Card, Layout, Row } from 'antd'
import HelpBtn from '../components/HelpBtn'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
      <HelpBtn />
    </Layout>
  )
}

export default Login
