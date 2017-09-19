import axios from 'axios';

export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

const initialState = [];
// const DocType = 'facet_field=document_type=article'

export const getArticles = (key, subject) => ( dispatch) => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${subject}`)
        .then((response) => {
        // console.log("qw");
            dispatch({ type: GET_ARTICLES_SUCCESS, articles: response.data.response.docs}
            )
        })
        .catch(function (error) {
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

