import {UPDATE_PREVIEW} from '../actions/types'

const preview = (state = '', action) => {
    switch (action.type) {
        case UPDATE_PREVIEW:
            return action.preload
        default:
            return state
    }
}

export default preview