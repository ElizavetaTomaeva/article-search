import React, { Component } from 'react'
import { Article, ArticleList } from "../ArticleList"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getArticles } from '../../reducers/GetArticles'
import { SearchBlock }  from './SearchBlock'
import Paginate from 'react-paginate';

const mapStateToProps = state => ({
    articles: state.articles
});

export const mapDispatchToProps = (dispatch) => ({
    getArticles(key, subject, page) { dispatch(getArticles(key, subject,  page)) }
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
        this.props.getArticles(ApiKey, this.state.input, 0);
    };

    getIssuesByPage = (page) => {
        this.props.getArticles(ApiKey, this.state.input, page)
    };

    render() {
        const articles = this.props.articles;
        return (
            <div className="main">
                <div className="header">
                    <img className="logo" src="../../../content/nyt_logo.png" />
                </div>
                <SearchBlock
                    changed={ this.getInput }
                    clicked={ this.getIssues } />
                <div className="list">
                    <ArticleList>
                        {articles[0] && articles[0].map((item, index) =>
                            <div className="list-item">
                                <Article
                                    key={index}
                                    imgLink={item.multimedia[1].url}
                                    pbLink={item.web_url}
                                    pbHeader={item.headline.main}
                                    pbDate={item.pub_date}
                                    pbLead={item.snippet}
                                    pbPharagraph={item.lead_paragraph}
                                />
                            </div>
                        )
                        }

                        { articles[1] ?
                            <Paginate
                                containerClassName="pagination"
                                pageClassName="pagination-item"
                                previousClassName="pagination-item"
                                nextClassName="pagination-item"
                                activeClassName="pagination-item active-item"
                                breakClassName="pagination-item"
                                pageCount={ ((articles[1].hits)/10) < 200 ? (articles[1].hits)/10 : 200}
                                onPageChange={ (value) => this.getIssuesByPage(value.selected) }
                                nextLabel=">"
                                previousLabel="<"
                            /> : null
                        }
                    </ArticleList>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
