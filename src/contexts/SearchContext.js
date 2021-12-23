import React, { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { findShow } from "../store/actions"

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
    const { ...rest } = props
    let initialState = {
        series: [],
        people: [],
        seriesName: "",
        isFetching: false,
        isFetchingPeople: false,
        typingTimeout: 0,
    }
    const [state, setState] = useState(initialState)
    const [typingTimeout, setTypingTimeout] = useState()
    const navigate = useNavigate()

    const search = (query) => {
        var data = findShow(state.seriesName)
        setState({ ...data, seriesName: query })
    }

    const onSeriesInputChange = (e) => {
        if (typingTimeout) {
            clearTimeout(typingTimeout)
            search(e.target.value)
        }
        setTypingTimeout(
            setTimeout(function () {
                search(e.target.value)
            }, 500),
        )
    }
    const onSeriesInputKeyDown = (e) => {
        if (e.key === "Enter") {
            setTypingTimeout(null)
            search(e.target.value)
            navigate({
                to: "/",
                options: { state },
            })
            navigate("/")
        }
    }

    return (
        <SearchContext.Provider
            value={{
                ...state,
                onSeriesInputChange: onSeriesInputChange,
                onSeriesInputKeyDown: onSeriesInputKeyDown,
            }}
            {...rest}
        />
    )
}

export default SearchContextProvider
