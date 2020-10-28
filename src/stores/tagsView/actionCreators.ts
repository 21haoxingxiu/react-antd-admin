import { SET_ACTIVE_TAG, REMOVE_ALL_TAG, ADD_TAG, REMOVE_THER_TAG, REMOVE_TAG } from './constants'
import { Action } from 'redux'
import { TagItem } from '~/interface/layout/tagsView.interface'

type SET_ACTIVE_TAG_TYPE = typeof SET_ACTIVE_TAG
type ADD_TAG_TYPE = typeof ADD_TAG
type REMOVE_TAG_TYPE = typeof REMOVE_TAG
type REMOVE_ALL_TAG_TYPE = typeof REMOVE_ALL_TAG
type REMOVE_THER_TAG_TYPE = typeof REMOVE_THER_TAG

export interface SetActiveTag extends Action<SET_ACTIVE_TAG_TYPE> {
  payload: TagItem['id']
}
export interface AddTag extends Action<ADD_TAG_TYPE> {
  payload: TagItem
}
export interface RemoveTag extends Action<REMOVE_TAG_TYPE> {
  payload: TagItem['id']
}
export interface RemoveAllTag extends Action<REMOVE_ALL_TAG_TYPE> {}
export interface RemoveOtherTag extends Action<REMOVE_THER_TAG_TYPE> {}

export const setActiveTag = (payload: string): SetActiveTag => ({
  type: SET_ACTIVE_TAG,
  payload
})

export const addTag = (payload: AddTag['payload']): AddTag => ({
  type: ADD_TAG,
  payload
})

export const removeTag = (payload: string): RemoveTag => ({
  type: REMOVE_TAG,
  payload
})

export const removeAllTag = (): RemoveAllTag => ({
  type: REMOVE_ALL_TAG
})

export const removeOtherTag = (): RemoveOtherTag => ({
  type: REMOVE_THER_TAG
})

export type TagsActions = SetActiveTag | AddTag | RemoveTag | RemoveAllTag | RemoveOtherTag
