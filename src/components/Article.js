import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Article  extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
        this.readMoreClick = this.readMoreClick.bind(this);
    }
    readMoreClick(){
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    render() {
        let author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return (
            <div className="article">
                <p className="news_author">{author}:</p>
                <p className="news_text">{text}</p>
                <a href='#'
                   onClick = {this.readMoreClick}
                   className = 'news_readmore ' >
                    Подробнее</a>
                <p className = {'news_readmore ' + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        );
    }
}
Article.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Article ;