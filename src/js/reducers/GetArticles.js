import axios from 'axios';

export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

const initialState = [];
const DocType = 'facet_field=document_type=article';

export const getArticles = (key, subject, page) => ( dispatch) => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${subject}&${DocType}&page=${page}`)
        .then((response) => {
            dispatch({ type: GET_ARTICLES_SUCCESS, articles: [response.data.response.docs, response.data.response.meta] }
            )
        })
        .catch((error) => {
            console.log(error);
        })
};

const articles = (state=initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:
            return action.articles;
        default:
            return state
    }
};

export default articles

