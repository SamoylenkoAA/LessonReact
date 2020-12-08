import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routesMap, urlBuilder} from '~/routes/routes.js';

import cartModel from '~s/cart.js';

export default class extends React.Component{
    render(){
        let posts = [1,2,3,4];
        let links = posts.map((post) => {
            return <div key={post}>
                <Link to={urlBuilder('post', {some: post})}>Post {post}</Link>
            </div>
        });

        return(
            <div>
                <h2>Ваш заказ принят. С Вами свяжутся в близжайшее время.</h2>
                <p>
                    <strong>Цена покупки: </strong>
                    {cartModel.total}
                </p>
                <div>
                    {links}
                </div>
            </div>
        )
    }
}