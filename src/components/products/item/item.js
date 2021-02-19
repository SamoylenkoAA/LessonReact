import React from 'react';
import { Button } from 'react-bootstrap';

export default function(props){

    let btn;
    if(props.inCart){
        btn = <Button variant='danger' onClick={props.inRemove}>
                    Удалить
                </Button>
    }else{
        btn = <Button variant='success' onClick={props.inAdd}>
                    Добавить
                </Button>
    }

    return(
        <div>
            <h2>{props.title}</h2>
            <hr/>
            <div>
                <strong>Price: {props.price}</strong>
            </div>
           <props.linkComponent to={props.backUrl}>Send</props.linkComponent>
           <hr/>
           {btn}
        </div>
        
    )
}