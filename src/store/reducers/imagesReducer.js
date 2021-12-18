import * as types from "../types"
import initialState from "./initialState"

export default function imagesReducer(state = initialState.images, action) {
    let tmp = null
    switch (action.type) {
        case types.GET_IMAGES:
            tmp = Object.assign({}, state)
            tmp.isFetching = true
            state = tmp
            break
        case types.GET_IMAGES_SUCCESS:
            tmp = Object.assign({}, state)
            tmp.isLoaded = true
            tmp.data = action.images
            state = tmp
            break
        default:
            break
    }
    return state
}
