import { SET_USER_ITEM } from './constants'
import { UserState, UserActions } from './actionCreators'
import produce from 'immer'

const userState: UserState = {
  token: '',
  logged: false,
  menuList: [],
  username: '',
  role: ''
}

export default (state = userState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_USER_ITEM:
    }
  })
}
