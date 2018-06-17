import React, {Component} from 'react';
import './index.css';
import News from './components/News';

var my_news = [
    {
        author: 'Саша',
        text: 'в четверг четвертого числа...'
    },
    {
        author: 'Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    }
];
class App extends Component {
    render() {
        return(
            <div>
                <h3>Новости</h3>
                <News data={my_news} />
            </div>
            )
    }
}

export default App;