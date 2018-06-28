import {UPDATE_PREVIEW} from './types'

function updatePreview(text) {
    return {
        type: UPDATE_PREVIEW,
        preload: text
    }
}

export default updatePreview
