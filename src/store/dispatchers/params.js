import * as types from "../types"

export function setParams(params) {
    let tmpParams = Object.assign({}, params)

    tmpParams = buildParams(tmpParams)

    return {
        type: types.SET_PARAMS,
        params: tmpParams,
    }
}

function buildParams(tmpParams) {
    for (let idx in tmpParams) {
        let value = decodeURIComponent(tmpParams[idx])
        if (value || (value && value.length !== 0)) {
            if (value.indexOf(",") != -1) {
                tmpParams[idx] = value.split(",").map(function (i) {
                    if (isNaN(i)) {
                        return i
                    }
                    return parseInt(i)
                })
            }

            if (idx == "sort" && !Array.isArray(value)) {
                tmpParams[idx] = [value]
            } else if (Array.isArray(value) && value.length == 0) {
                delete tmpParams[idx]
            } else if (!isNaN(value)) {
                tmpParams[idx] = Array.isArray(value) ? value.map((i) => parseInt(i)) : [parseInt(value)]
            }
        } else {
            delete tmpParams[idx]
        }
    }

    return tmpParams
}
