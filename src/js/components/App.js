import React, { Component } from 'react';
import './App.less';
import Main from "./SearchBlock/index";
import { Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../store'
import {ArticleList} from "./ArticleList/index";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={ history }>
                <Route exact path="/" component={ Main } />
                {/*<Route path="/results" component={ ArticleList }/>*/}
            </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
