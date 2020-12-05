import React from 'react';
import {makeObservable, observable, computed, action} from 'mobx';

import Cart from '~p/cart/cart.js';
import Order from '~p/order/order.js';
import Result from '~p/result/result.js';

class Router{
    constructor() {
        makeObservable(this);
    }
    
    routes = {
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>
    }

    @observable activeRouter = 'cart';

    @computed get component(){
        return this.routes[this.activeRouter]();
    }

    @action moveTo(route){
        this.activeRouter = route;
    }
}

export default new Router();