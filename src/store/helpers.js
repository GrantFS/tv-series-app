export function toArray(object) {
    let arr = []
    for (let idx in object) {
        arr.push(object[idx])
    }
    return arr
}

export function sort(object, field) {
    var results = []
    if (!object || typeof object.length == "undefined") return object

    return object.reduce((item, a) => {
        if (!results[item[field]]) {
            var pathb = item[field]
            results[pathb] = results[pathb] || []
            results[pathb].push(item)
        }
        var path = a[field]
        results[path] = results[path] || []
        results[path].push(a)
        return results
    })
}
export function findById(list, id) {
    if (list == null) {
        return null
    }

    let result = list.filter((obj) => {
        return obj.id === id
    })

    if (result.length > 0) {
        return result[0]
    }

    return null
}
