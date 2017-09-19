import React, { Component } from 'react'
import { Article, ArticleList } from "../ArticleList"
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getArticles } from '../../reducers/GetArticles'
import { SearchBlock }  from './SearchBlock'

const mapStateToProps = state => ({
    articles: state.articles
});

export const mapDispatchToProps = (dispatch) => ({
    getArticles(key, subject) { dispatch(getArticles(key, subject)) }
});

const ApiKey = 'b6eadb42ffa743189cb8c054a116a9a1';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            articles: []
        };
    }

    getInput = (e) => {
        this.setState({input: e.target.value})
    };

    getIssues = () => {
        this.props.getArticles(ApiKey, this.state.input);
    };
    render() {
        const articles = this.props.articles;
        return (
            <div className="main">
                <div className="header">
                    <h1>New York Times</h1>
                </div>
                <SearchBlock
                    changed={ this.getInput }
                    clicked={ this.getIssues } />
                <div className="list">
                    <ArticleList>
                        {articles && articles.map((item, index) =>
                            <div className="list-item">
                                <Article
                                    key={index}
                                    pbLink={item.web_url}
                                    pbHeader={item.headline.main}
                                    pbDate={item.pub_date}
                                    pbLead={item.snippet}
                                    pbPharagraph={item.lead_paragraph}
                                />
                            </div>
                        )
                        }
                    </ArticleList>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
