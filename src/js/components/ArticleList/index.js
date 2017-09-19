import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return(
            <div>
                <a className="links" href={this.props.pbLink} target="_blank">{this.props.pbHeader}</a>
                <div>{this.props.pbDate}</div>
                <div>{this.props.pbLead}</div>
                <div>{this.props.pbPharagraph}</div>
            </div>
        )
    }
}

export class ArticleList extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}