//В этот файл импортирую все редюсеры, которые есть в приложении, потом пачкой отсюда экспортирую. Это делается для того, чтобы не нагромождать файл index.ts(в котором рутовый редюсер) в папке store, тк в приложении мб много редюсеров

import auth from './auth'
import event from './event'

export default {
  auth,
  event,
}
