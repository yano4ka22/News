import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.text).focus();
    }
    handleChange(event) {
        this.setState({myValue: event.target.value});
    }
    handleSubmit() {
        alert(ReactDOM.findDOMNode(this.refs.text).value);
    }
    onCheckRuleClick(event) {
        ReactDOM.findDOMNode(this.refs.alert_button).disabled = !event.target.checked;
    }
    render() {
        return (
            <form className = 'add cf'>
                <input type='text'
                    className='add_author'
                    defaultValue = ''
                    placeholder='Ваше имя'
                    ref = 'author'
                />
                <textarea className='add_text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                />
                <label className='add_checkrule'>
                    <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами
                </label>
                <button className='add_btn' onClick = {this.handleSubmit} ref='alert_button' disabled>Click</button>
            </form>
        );
    }
}

export default Add;