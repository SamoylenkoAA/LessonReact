import React from 'React';
import LazyInput from './inputs/lazy/lazy';

export default class extends React.Component{
    state = {
        inp1: 'start',
        inp2: 'start'
    }
    update = (cnt, i) => {
        
    }

    render(){
        return(
            <div>
                <h4>Input Lazy</h4>
                <p>{this.state.inp1}</p>
                <LazyInput nativeProps = {{type: 'text', className: 'some'}}
                           value = {this.state.inp1}
                           onChange = {(e) => this.setState({inp1: e})} />
                           <hr/>
                <button onClick = {(e) => this.setState({inp1: 'test'})}>
                    Unreal change
                </button>
            </div>
        )
    } 
}
