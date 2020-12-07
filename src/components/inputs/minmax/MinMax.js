import React from 'react';
import LazyInput from '~c/inputs/lazy/lazy.js';
import PropTypes from 'prop-types';
import Styles from './minmax.module.css';

export default class extends React.PureComponent{
    static defaultProps = {
        onChange: function(e){console.log(e)}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    nativeLazy = React.createRef();

    decrease = () => {
        let realCnt = this.set(this.props.cnt  - 1);
        this.nativeLazy.current.setValue(realCnt)
    }

    increase = () => {
        let realCnt = this.set(this.props.cnt  + 1);
        this.nativeLazy.current.setValue(realCnt)
    }

    set = (newCnt) =>{
        let cnt  = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.props.onChange(cnt);
        return cnt;
    }

    onChange = (newStr) => {
        let cnt = parseInt(newStr);
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);

        if(realCnt.toString() !== newStr){
            this.nativeLazy.current.setValue(realCnt)
        }
    }

    render(){
        console.log('1');
        return(
            <div>
                <button onClick={this.decrease}>Минус</button>
                {/* {this.state.current}<br/>
                {this.state.inputValue} */}
                <LazyInput
                        ref = {this.nativeLazy}
                        nativeProps = {{type: 'text', className: Styles.input}}  
                        value = {this.props.cnt} 
                        onChange = {this.onChange}
                       />
                <button onClick={this.increase}>Плюс</button>
            </div>
        )
    }
}