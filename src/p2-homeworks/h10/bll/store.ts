import { combineReducers, createStore } from 'redux'
import { themesReducer } from '../../h12/bll/themesReducer'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
   loading: loadingReducer,
   themes: themesReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
