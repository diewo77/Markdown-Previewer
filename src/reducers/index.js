import { combineReducers } from 'redux'
import editorReducer from './editorReducer'
import previewReducer from './previewReducer'

export default combineReducers({
  editor: editorReducer,
  preview: previewReducer
})