import React from 'react';
import  {Card, Button} from 'react-bootstrap';
import rootStore from '~s/rootStore.js';

import {Link} from 'react-router-dom';
import {routesMap, urlBuilder} from '~/routes/routes.js';

import {observer} from 'mobx-react';


class List extends React.Component{
    render(){
        let productsModel = rootStore.products;
        let cartModel = rootStore.cart;

        let products = productsModel.items.map((item) => {
            let btn;
            if(cartModel. inCart(item.id)){
                btn = <Button variant='danger' onClick={() => cartModel.remove(item.id)}>
                            Удалить
                      </Button>
            }else{
                btn = <Button variant='success' onClick={() => cartModel.add(item.id)}>
                            Добавить
                      </Button>
            }

            return  <div className={'col-3'} key={item.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Price: {item.price}</Card.Text>
                                <Link to={urlBuilder('product', {id: item.id})}>Перейти</Link>
                                <hr/>
                                {btn}                           
                            </Card.Body>
                        </Card>
                    </div>        
        })

        return(
            <div className='row'>
                {products}
            </div>
        )
    }
}

export default observer(List);