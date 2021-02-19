import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routesMap, urlBuilder} from '~/routes/routes.js';

import rootStore from '~s/rootStore.js';

export default class extends React.Component{
    render(){
        let cartModel = rootStore.cart;
        return(
            <div>
                <h2>Ваш заказ принят. С Вами свяжутся в близжайшее время.</h2>
                <p>
                    <strong>Цена покупки: </strong>
                    {cartModel.total}
                </p>
            </div>
        )
    }
}