import * as types from "../types"

export function loadCast(id) {
    return (dispatch) => {
        dispatch({ type: types.GET_CAST })
        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
            .then((response) => response.json())
            .then((json) => dispatch(getCastSuccess(json)))
    }
}

export function getCastSuccess(cast) {
    return {
        type: types.GET_CAST_SUCCESS,
        cast,
    }
}
//http://api.tvmaze.com/people/1/castcredits?embed=show
