import { AppDispatch } from '../..'
import UserService from '../../../api/userService'
import { IUser } from '../../../models/IUser'
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserActon,
} from './types'

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setUser: (user: IUser): SetUserActon => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  //Асинхронные action creators:

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true))
        setTimeout(async () => {
          //<IUser[]> - чтобы typescript понимал, что data - массив пользователей
          const response = await UserService.getUsers()
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          )
          if (mockUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', mockUser.username)
            dispatch(AuthActionCreators.setUser(mockUser))
            dispatch(AuthActionCreators.setIsAuth(true))
          } else {
            dispatch(
              AuthActionCreators.setError('Incorrect username or password.')
            )
          }
          dispatch(AuthActionCreators.setIsLoading(false))
        }, 1000)
      } catch (e) {
        dispatch(AuthActionCreators.setError('login error'))
      }
    },

  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
    dispatch(AuthActionCreators.setIsAuth(false))
    dispatch(AuthActionCreators.setUser({} as IUser))
  },
}
