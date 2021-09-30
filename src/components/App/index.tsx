import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Main from '../Main';
import Navbar from '../Navbar';
import withReduxStore from "../../store/lib/with-redux-store";
import SearchContextProvider from '../../contexts/SearchContext';

const App = ({reduxStore}: any) => {
  return (
    <div className="App" >
      <Provider store={reduxStore}>
        <SearchContextProvider>
          <Navbar />
          <Main />
        </SearchContextProvider>
      </Provider>
    </div>
  );
};

export default withReduxStore(App);
