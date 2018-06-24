import React, {Component} from 'react';
import EventEmitter from 'wolfy87-eventemitter';
import './index.css';
import News from './components/News';
import Add from './components/Add';

let my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];
window.ee = new EventEmitter();
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: my_news
        };
    }
    componentDidMount(){
        let self = this;
        window.ee.addListener('News.add', (item) =>{
            console.log('asdasd,',item);
            let nextNews = item.concat(self.state.news);
                self.setState({news: nextNews});
            }
        )
    }
    componentWillUnmount(){
        window.ee.removeListener('News.add');
    }
    render() {
        return(
            <div className='app'>
                <h3>Добавить новость</h3>
                <Add />
                <h3>Новости</h3>
                <News data={my_news} />
            </div>
        )
    }
}

export default App;