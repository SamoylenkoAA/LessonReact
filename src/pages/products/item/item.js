import React from 'react';
import {routesMap, urlBuilder} from '~/routes/routes.js';
import {Link} from 'react-router-dom';
import rootStore from '~s/rootStore.js';
import Error404 from '~c/errors/error404/error.js';
import Item from '~c/products/item/item.js';

export default class extends React.Component{
    render(){
        let id = this.props.match.params.id;
        let product = rootStore.products.getById(id);
        console.log(product);

        if(product === null){
            return <Error404/>
        }else{
            return <Item 
                        title = {product.title}
                        price = {product.price}
                        backUrl={routesMap.products}
                        linkComponent={Link}
                        inCart = {rootStore.cart.inCart(product.id)}
                        inAdd = {() => rootStore.cart.add(product.id)}
                        inRemove = {() => rootStore.cart.remove(product.id)}
                        />
        }
    }
}