//Файл для типизации стэйта и всевозможных actions с которыми предстоит работать

import { IUser } from '../../../models/IUser'

export interface AuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

//Инттерфейс описывает поля экшена
export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH //обязательное поле для экшена
  payload: boolean
}

export interface SetUserActon {
  type: AuthActionEnum.SET_USER //обязательное поле для экшена
  payload: IUser
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING //обязательное поле для экшена
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR //обязательное поле для экшена
  payload: string
}

//Обобщающий тип, который объединяет все интерфейсы
export type AuthAction =
  | SetAuthAction
  | SetUserActon
  | SetIsLoadingAction
  | SetErrorAction
