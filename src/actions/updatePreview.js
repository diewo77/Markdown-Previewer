import {UPDATE_PREVIEW} from './types'

function updatePreview(text) {
  console.log('inside action', text)
  return {
    type: UPDATE_PREVIEW,
    text
  }
}

export default updatePreview
