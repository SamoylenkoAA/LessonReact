import React from 'React';

import router from '~s/router.js';
import {observer} from 'mobx-react';

@observer class App extends React.Component{
    render(){
        return(
            <div className='container'>
                <button onClick = {() => this.forceUpdate()}>Update</button>
                <hr/>
                {router.component}
            </div>
        )
    }
}

export default App;
