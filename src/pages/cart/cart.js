import React from 'react';
import PropTypes from 'prop-types';
import MinMax from '~c/inputs/minmax/MinMax.js';
import { Button } from 'react-bootstrap';
import rootStore from '~s/rootStore.js';
import {routesMap} from '~/routes/routes.js';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import LinkButton from '~c/links/button/button.js'

class Cart extends React.Component{
    render(){
        let cartModel = rootStore.cart;

        let productsRow  = cartModel.productsInDetail.map((product) => {
            return(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <MinMax min = {1} 
                                max = {product.rest} 
                                cnt = {product.cnt}
                                onChange = {(cnt) => cartModel.change(cnt, product.id)} />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <Button variant ="primary" 
                                onClick = {() => cartModel.remove(product.id)}>x
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
                <LinkButton  to = {routesMap.order} className = {"btn btn-primary"} />
            </div>
        )
    }
}

export default observer(Cart);
