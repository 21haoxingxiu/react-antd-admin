import { SET_ACTIVE_TAG, REMOVE_ALL_TAG, ADD_TAG, REMOVE_THER_TAG, REMOVE_TAG } from './constants'
import produce from 'immer'
import { TagState } from '~/interface/layout/tagsView.interface'
import { TagsActions } from './actionCreators'

const tagsViewState: TagState = {
  tags: [],
  activeTagId: ''
}

export default (state = tagsViewState, actions: TagsActions): TagState => {
  const tags = [...state.tags]
  return produce(state, draft => {
    switch (actions.type) {
      case SET_ACTIVE_TAG:
        draft.activeTagId = actions.payload
        break
      case ADD_TAG:
        if (!tags.find(tag => tag.id === actions.payload.id)) {
          tags.push(actions.payload)
        }
        ;(draft.tags = tags), (draft.activeTagId = actions.payload.id)
        break
      case REMOVE_TAG:
        const targetKey = actions.payload
        // dashboard cloud't be closed
        if (targetKey === state.tags[0].id) {
          return { ...state }
        }
        let activeTagId = state.activeTagId
        let lastIndex = 0
        tags.forEach((tag, i) => {
          if (tag.id === targetKey) {
            lastIndex = i - 1
          }
        })
        const tagList = tags.filter(tag => tag.id !== targetKey)
        if (tagList.length && activeTagId === targetKey) {
          if (lastIndex >= 0) {
            activeTagId = tagList[lastIndex].id
          } else {
            activeTagId = tagList[0].id
          }
        }
        draft.tags = tagList
        draft.activeTagId = activeTagId
        break
      case REMOVE_ALL_TAG:
        draft.activeTagId = state.tags[0].id
        draft.tags = [state.tags[0]]
        break
      case REMOVE_THER_TAG:
        const activeTag = state.tags.find(tag => tag.id === state.activeTagId)
        const activeIsDashboard = activeTag!.id === state.tags[0].id
        draft.tags = activeIsDashboard ? [state.tags[0]] : [state.tags[0], activeTag!]
        break
      default:
    }
  })
}
