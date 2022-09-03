import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store'

//В качестве дженерика указываем тип, который отвечает за состояние приложения
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

//Хук для того, чтобы сразу видеть, какие есть редюсеры, поля (будет автокомплит и не нужно лазить по редюсерам и смотреть, что там находится )
