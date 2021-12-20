import React, { createContext, useState } from "react"
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
        }
        search(e.target.value)
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

// class SearchContextProvider extends Component {
//     state = {
//         series: [],
//         people: [],
//         seriesName: "",
//         isFetching: false,
//         isFetchingPeople: false,
//         typingTimeout: 0,
//     }

//     constructor(props) {
//         super(props)
//         this.onSeriesInputChange = this.onSeriesInputChange.bind(this)
//     }

//     componentDidMount() {
//         this.setState(this.props.history.location.state)
//     }

//     onSeriesInputChange = (e) => {
//         const self = this
//         if (self.state.typingTimeout) {
//             clearTimeout(self.state.typingTimeout)
//         }

//         self.setState({
//             seriesName: e.target.value,
//             isFetching: true,
//             isFetchingPeople: true,
//             typingTimeout: setTimeout(function () {
//                 var data = findShow(self.state.seriesName)
//                 self.setState(data)
//                 self.props.history.push({
//                     state: data,
//                 })
//             }, 500),
//         })
//     }
//     onSeriesInputKeyDown = (e) => {
//         if (e.key === "Enter") {
//             this.setState({ seriesName: e.target.value, isFetching: true, isFetchingPeople: true })
//             var data = findShow(e.target.value)
//             this.setState(data)
//             this.props.history.push({
//                 pathname: "/",
//                 state: data,
//             })
//         }
//     }
//     render() {
//         return (
//             <SearchContext.Provider
//                 value={{
//                     ...this.state,
//                     onSeriesInputChange: this.onSeriesInputChange,
//                     onSeriesInputKeyDown: this.onSeriesInputKeyDown,
//                 }}
//             >
//                 {this.props.children}
//             </SearchContext.Provider>
//         )
//     }
// }

// export default withRouter(SearchContextProvider)
