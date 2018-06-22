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
        alert('author: ' + ReactDOM.findDOMNode(this.refs.author).value + '\ntext' + ReactDOM.findDOMNode(this.refs.text).value);
    }
    onCheckRuleClick(event) {
        ReactDOM.findDOMNode(this.refs.alertButton).disabled = !event.target.checked;
    }
    render() {
        return ;
    }
}

export default Add;