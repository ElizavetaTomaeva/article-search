import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './GetArticles.js'


export default combineReducers({
    routing: routerReducer,
    articles
})