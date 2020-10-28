import { GlobalState, GlobalActions } from './actionCreators'
import { getGlobalState } from '~/utils/getGloabal'
import { SET_GLOBAL_ITEM } from './constants'
import produce from 'immer'

const globalState: GlobalState = {
  ...getGlobalState(),
  noticeCount: 0,
  locale: (localStorage.getItem('locale')! || 'en_US') as any,
  newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true
}

export default (state = globalState, actions: GlobalActions): GlobalState => {
  return produce(state, draft => {
    switch (actions.type) {
      case SET_GLOBAL_ITEM:
        draft
        break
      default:
        return state
    }
  })
}
