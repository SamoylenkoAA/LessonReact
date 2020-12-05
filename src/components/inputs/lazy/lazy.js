import React from 'React';
import propTypes from 'prop-types';


export default class extends React.Component{
    static defaultProps = {
        onChange: function(){},
        nativeProps: {}
    }
    
    static propTypes = {
        value: propTypes.any.isRequired,
        onChange: propTypes.func,
        nativeProps: propTypes.object
    }

    nativeInput = React.createRef();
    
    setValue(val){
        this.nativeInput.current.value = val;
    }

    checkChange = (e) => {
        if(this.props.value.toString() !== e.target.value){
            this.props.onChange(e.target.value);
        }
    }

    enterKeyUp = (e) => {
        if(e.keyCode === 13){
            this.checkChange(e)
        }
    }

    render(){
        return(
            <input {... this.props.nativeProps}
                defaultValue= {this.props.value}
                onBlur = {this.checkChange}
                onKeyUp = {this.enterKeyUp}
                ref = {this.nativeInput} />
        )
    } 
}
