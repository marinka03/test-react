import React,{Component} from 'react';
import PropTypes from 'prop-types';
import style from '../Counter/Counter.module.css'
import Controls from './Controls/Controls';

class Counter extends Component {
    static defaultProps = {
        initialValue: 0
    }
    static propTypes = {
        initialValue: PropTypes.number.isRequired,
    }

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = () => {
        this.setState(prevState => ({value: prevState.value + 1}));
    }

    handleDecrement = () => {
        this.setState(prevState => ({value: prevState.value - 1}));
    }

    // const {value} = this.state;

    render(){

        return(
            <div className={style.counter}>
                <span className={style.Counter__value}>{this.state.value}</span>

                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            </div>
        )
    }
}

export default Counter;