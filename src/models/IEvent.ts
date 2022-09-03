export interface IEvent {
  autor: string
  guest: string
  date: string //Можно указать тип Date, но я указываю string, тк буду приводить к нужному формату, чтобы отправлять на бэк
  description: string
}
