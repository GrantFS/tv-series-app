import React, { Component } from "react"
import "./App.css"
import { Provider } from "react-redux"
import Main from "../../components/Main"
import Navbar from "../../components/Navbar"
import "whatwg-fetch"
import SearchContextProvider from "../../contexts/SearchContext"
import store from "../../store"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <SearchContextProvider>
                        <Navbar />
                        <Main />
                    </SearchContextProvider>
                </Provider>
            </div>
        )
    }
}

export default App
