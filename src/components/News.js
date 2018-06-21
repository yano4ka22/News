import React, {Component} from 'react';
import Article from './Article';

class News extends Component {
    render() {
        let data = this.props.data;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map((item, index) =>
                <div key={index}>
                    <Article data={item} />
                    {/*<p className="new_author">{item.author}: </p>
                    <p className="news_text">{item.text}</p>*/}
                </div>
            );
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return (
        <div className="news">{newsTemplate}
            <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
        </div>
        );
    }

}

export default News;