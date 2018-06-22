import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }

    onBtnClickHandler(e) {
        e.preventDefault();
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.text).focus();
    }

    handleChange(event) {
        this.setState({myValue: event.target.value});
    }

    handleSubmit() {
        alert('author: ' + ReactDOM.findDOMNode(this.refs.author).value + '\ntext' + ReactDOM.findDOMNode(this.refs.text).value);
    }

    onCheckRuleClick(event) {
        ReactDOM.findDOMNode(this.refs.alertButton).disabled = !event.target.checked;
    }

    render() {
        return (
            <form className='add'>
                <input
                    type='text'
                    className='add_author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                />
                <input
                    className='add_text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                />
                <label className='add_checkrule'>
                    <input type='checkbox' defaultChecked={false} ref='checkrule'/>Я согласен с правилами
                </label>
                <button
                    className='add_btn'
                    onClick={this.handleSubmit}>
                    Показать alert
                </button>
            </form>
        );
    }
}

export default Add;