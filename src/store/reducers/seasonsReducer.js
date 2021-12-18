import * as types from "../types"
import initialState from "./initialState"

export default function seasonsReducer(state = initialState.seasons, action) {
    let tmp = null
    switch (action.type) {
        case types.GET_SEASONS:
            tmp = Object.assign({}, state)
            tmp.isFetching = true
            state = tmp
            break
        case types.GET_SEASONS_SUCCESS:
            tmp = Object.assign({}, state)
            tmp.isLoaded = true
            tmp.data = action.seasons
            state = tmp
            break
        default:
            break
    }
    return state
}
