import React from 'react';
import PropTypes from 'prop-types';

import cartModel from '~s/cart.js';

export default class extends React.Component{
    render(){
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