import React from 'react';
import PropTypes from 'prop-types';
import MinMax from '~c/inputs/minmax/MinMax.js';
import { Button } from 'react-bootstrap';

import cartModel from '~s/cart.js';
import {routesMap} from '~/routes/routes.js';
import {Link} from 'react-router-dom';

import {observer} from 'mobx-react';

@observer class Cart extends React.Component{

    // prevMove = () => {
    //     route.moveTo('order');
    // }

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
                                onChange = {cartModel.onChange[i]} />
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
                <Link to = {routesMap.order} className = "btn btn-primary">
                        Заказать
                </Link>
            </div>
        )
    }
}

export default Cart;
