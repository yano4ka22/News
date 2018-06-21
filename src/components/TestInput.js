import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TestInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    }
    handleChange(event) {
        this.setState({myValue: event.target.value});
    }
    handleSubmit() {
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }
    render() {
        return (
            <div>
                <p onClick = {this.handleSubmit} ref='alert_button'>Click</p>
                <input
                    className='test-input'
                    defaultValue = ''
                    placeholder='введите значение'
                    ref = 'myTestInput'
                />
            </div>
        );
    }
}

export default TestInput;