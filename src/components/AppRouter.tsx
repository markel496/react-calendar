import { Routes, Route, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth)

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        : publicRoutes.map((route) => <Route key={route.path} {...route} />)}
    </Routes>
  )
}

export default AppRouter
