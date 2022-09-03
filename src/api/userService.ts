import axios, { AxiosResponse } from 'axios'
import { IUser } from '../models/IUser'

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>('./users.json')
  }
}

//getUsers() - Асинхронная функция, внутри которой мы будем делать запрос на получение данных из файла. Асинхронная функия всегда возвращает промис. В промис завернуты какие-то данные и в моем случае это то, что вернет axios, а в поле data будет находиться массив пользователей.

//static - для того, чтобы можно было вызвать getUsers() без создания экземпляра класса
