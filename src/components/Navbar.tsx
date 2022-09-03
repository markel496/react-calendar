import { Layout, Menu, MenuProps, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const itemsNotAuth: MenuProps['items'] = ['Login'].map((key) => ({
  key,
  label: `${key}`,
}))

const itemsAuth: MenuProps['items'] = ['Logout'].map((key) => ({
  key,
  label: `${key}`,
}))

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth)
  const { logout } = useActions()
  const navigate = useNavigate()

  const clickHandler = ({ key }: { key: string }) => {
    if (key === 'Login') {
      navigate(RouteNames.LOGIN)
    }

    if (key === 'Logout') {
      logout()
    }
  }

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth && (
          <div style={{ color: '#fff', marginRight: 10 }}>{user.username}</div>
        )}
        <Menu
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            minWidth: 85, // из-за бага antd
            maxWidth: '50%',
          }}
          theme="dark"
          mode="horizontal"
          items={isAuth ? itemsAuth : itemsNotAuth}
          selectable={false}
          onClick={clickHandler}
        />
      </Row>
    </Layout.Header>
  )
}

export default Navbar
