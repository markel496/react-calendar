import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const rootReducer = combineReducers(reducers) //по кайфу

export const store = createStore(rootReducer, applyMiddleware(thunk))

//тип Rootstate будет знать о редюсерах, с которыми работаем и о состоянии каждого редюсера
export type RootState = ReturnType<typeof store.getState>

//тип диспатча
export type AppDispatch = typeof store.dispatch
