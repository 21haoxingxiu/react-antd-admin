import * as actionTypes from './constants'
import produce from 'immer'
import { LoginType } from './data.d'

const defaultState: LoginType = {
  enterLoading: false
}

export default (state = defaultState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.CHANGE_ENTER_LOADING:
        draft.enterLoading = action.data
    }
  })
}
