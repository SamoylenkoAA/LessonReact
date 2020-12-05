import React from 'react';
import MinMax from '~c/inputs/minmax/MinMax.js';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import cartModel from '~s/cart.js';
import route from '~s/router.js';

import {observer} from 'mobx-react';

@observer class Cart extends React.Component{

    render(){
        let productsRow  = cartModel.products.map((product, i) => {
            return(
                <tr key = {product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMax min = {1} 
                                max = {product.rest} 
                                cnt = {product.cnt}
                                onChange = {(cnt) => {cartModel.change(cnt, i)}} />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <Button variant ="primary" 
                                onClick = {() => cartModel.remove(i)}>x
                        </Button>
                    </td>
                </tr>
            )
        })

        return(
            <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                <tbody>
                    {productsRow}
                </tbody>
            </table>
            <div>
                Итоговая сумма: {cartModel.total}
            </div>
                {/* <MinMax min={1} max={50} /> */}
                <Button variant ="primary" 
                        onClick = {() => route.moveTo('order')}>
                        Заказать
                </Button>
            </div>
        )
    }
}

export default Cart;
