import * as actionTypes from './actionTypes'

let articles = require('../data/articles.json')

// declare an initial state
const initialState = {
    articles: articles,
    counter: articles.length,
    mode: 'add' // declare as many stateful members as you need
}

// declare a reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle = {
                id: state.counter,
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
                counter: state.counter + 1
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles = state.articles.filter(article => article.id !== action.article.id)
            return {
                ...state,
                articles: updatedArticles
            }
        default:
            return state
    }
}

export default reducer
