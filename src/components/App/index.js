import React, {Component} from 'react';
import './App.css';
import { Provider } from "react-redux";
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import 'whatwg-fetch';
import withReduxStore from "../../store/lib/with-redux-store";

class App extends Component {

  render() {
    const { reduxStore } = this.props;
    return (
      <div className="App">
        <Provider store={reduxStore}>
          <Navbar />
          <Main />
        </Provider>
      </div>
    );
  }
}

export default withReduxStore(App);
