import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return(
            <div>
                <img src={this.props.imgLink}/>
                <a className="links" href={this.props.pbLink} target="_blank"><h2>{this.props.pbHeader}</h2></a>
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