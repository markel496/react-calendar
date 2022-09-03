import { IEvent } from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'

export interface EventState {
  guests: IUser[]
  events: IEvent[]
}

export enum EventActionEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

//Инттерфейс описывает поля экшена
export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS //обязательное поле для экшена
  payload: IUser[]
}

export interface SetEventsActon {
  type: EventActionEnum.SET_EVENTS //обязательное поле для экшена
  payload: IEvent[]
}

//Обобщающий тип, который объединяет все интерфейсы
export type EventAction = SetGuestsAction | SetEventsActon
