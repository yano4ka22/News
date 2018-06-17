import React, {Component} from 'react';

class Article  extends Component {
    render() {
        let author = this.props.data.author,
            text = this.props.data.text;


        return (
            <div className="article">
                <p className="news_author">{author}:</p>
                <p className="news_text">{text}</p>
            </div>
        );
    }
}

export default Article ;