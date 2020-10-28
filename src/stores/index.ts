/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-07 10:47:59
 * @LastEditors: zhan
 * @LastEditTime: 2020-10-24 16:24:32
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { globalReducer } from '~/reducers/gloabal.reducer'
// import { tagsViewlReducer } from '~/reducers/tagsView.reducer'
// import { userReducer } from '~/reducers/user.reducer'
import globalReducer from '~/stores/global/reducer'
import userReducer from '~/stores/user/reducer'
import tagsViewlReducer from '~/stores/tagsView/reducer'

const rootReducer = combineReducers({
  globalReducer,
  userReducer,
  tagsViewlReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  return store
}
