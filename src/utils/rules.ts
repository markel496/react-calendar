import moment from 'moment'

export const rules = {
  required: (message: string = 'Required field.') => ({
    required: true,
    message,
  }),

  max: (
    message: string = 'You can enter a maximum 20 characters.',
    max: number = 20
  ) => ({
    max,
    message,
  }),

  isDateAfter: (message: string = 'You cannot select a previous date') => ({
    //_: any - тк первый аргумент в данном случае не обязателен
    validator(_: any, value: moment.Moment) {
      //Вернет true, если выбранная дата = текущей или позже текущей
      if (value) {
        if (value.isSameOrAfter(moment())) {
          return Promise.resolve()
        }
        return Promise.reject(new Error(message))
      }
      return Promise.resolve()
    },
  }),
}
