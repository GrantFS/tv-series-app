import React, { createContext, Component } from "react"
import { findShow } from "../store/actions"
import { withRouter } from "react-router-dom"

export const SearchContext = createContext()

class SearchContextProvider extends Component {
    state = {
        series: [],
        people: [],
        seriesName: "",
        isFetching: false,
        isFetchingPeople: false,
        typingTimeout: 0,
    }

    constructor(props) {
        super(props)
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this)
    }

    componentDidMount() {
        this.setState(this.props.history.location.state)
    }

    onSeriesInputChange = (e) => {
        const self = this
        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout)
        }

        self.setState({
            seriesName: e.target.value,
            isFetching: true,
            isFetchingPeople: true,
            typingTimeout: setTimeout(function () {
                var data = findShow(self.state.seriesName)
                self.setState(data)
                self.props.history.push({
                    state: data,
                })
            }, 500),
        })
    }
    onSeriesInputKeyDown = (e) => {
        if (e.key === "Enter") {
            this.setState({ seriesName: e.target.value, isFetching: true, isFetchingPeople: true })
            var data = findShow(e.target.value)
            this.setState(data)
            this.props.history.push({
                pathname: "/",
                state: data,
            })
        }
    }
    render() {
        return (
            <SearchContext.Provider
                value={{
                    ...this.state,
                    onSeriesInputChange: this.onSeriesInputChange,
                    onSeriesInputKeyDown: this.onSeriesInputKeyDown,
                }}
            >
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}

export default withRouter(SearchContextProvider)
