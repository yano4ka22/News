import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnIsDisabled:true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    }
    handleChange(event) {
        this.setState({myValue: event.target.value});
    }
    handleSubmit() {
        alert(ReactDOM.findDOMNode(this.refs.author).value + '\n' + ReactDOM.findDOMNode(this.refs.text).value);
    }
    onCheckRuleClick() {
        let authorCheck = this.refs.author.value.trim();
        let textCheck = this.refs.text.value.trim();
        let item =[{
            author: authorCheck,
            text: textCheck,
            bigText: '...'
        }];

        window.ee.emit('News.add', item);

        let isCheck = true;
        if (this.isValid(authorCheck, textCheck)){
            isCheck = false;
        }

        this.setState(() => ({
            btnIsDisabled: isCheck
        }));
    }

    render() {
        return (
            <div className = 'add cf'>
                <input onChange={this.onCheckRuleClick}
                       type='text'
                       className='add_author'
                       defaultValue = ''
                       placeholder='Ваше имя'
                       ref = 'author'
                />
                <textarea onChange={this.onCheckRuleClick}
                          className='add_text'
                          defaultValue=''
                          placeholder='Текст новости'
                          ref='text'
                />
                <label className='add_checkrule'>
                    <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами
                </label>
                <button className='add_btn' onClick={this.onBtnClickHandler} ref='alert_button' disabled={this.state.btnIsDisabled}>Добавить новость</button>
            </div>
        );
    }
}

export default Add;