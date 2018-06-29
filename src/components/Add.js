import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true,
            btnIsDisabled:true
        };
        this.handleChange = this.handleChange.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    }
    handleChange(event) {
        this.setState({myValue: event.target.value});
    }
    /*handleSubmit() {
        alert(ReactDOM.findDOMNode(this.refs.author).value + '\n' + ReactDOM.findDOMNode(this.refs.text).value);
    }*/
    onCheckRuleClick(){
        this.setState(() => ({
            agreeNotChecked: !this.state.agreeNotChecked
        }));
    }
    onFieldChange(fieldName, e){
        let isCheck=true;
        if (e.target.value.trim() > 0) {
            isCheck= false;
        }
        this.setState(() => ({[''+fieldName]:isCheck}));
    }
    onBtnClickHandler() {
        let authorCheck = this.refs.author.value.trim();
        let textCheck = this.refs.text.value.trim();
        let item =[{
            author: authorCheck,
            text: textCheck,
            bigText: '...'
        }];
        this.setState(() => ({
            textIsEmpty: true
        }));
        this.refs.text.value = '';
        window.ee.emit('News.add', item);

    }

    render() {
        let agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;

        return (
            <div className='add cf'>
                <input onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                       type='text'
                       className='add_author'
                       defaultValue=''
                       placeholder='Ваше имя'
                       ref='author'
                />
                <textarea onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                          className='add_text'
                          defaultValue=''
                          placeholder='Текст новости'
                          ref='text'
                />
                <label className='add_checkrule'>
                    <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами
                </label>
                <button className='add_btn' onClick={this.onBtnClickHandler} ref='alert_button' disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>Добавить новость</button>
            </div>
        );
    }
}

export default Add;