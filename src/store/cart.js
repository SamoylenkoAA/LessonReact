import {makeObservable, observable, computed, action} from 'mobx';

class Cart{
    constructor() {
        makeObservable(this, {
            products: observable,
            change: action,
            remove: action,
            total: computed
        });
    }
        
    products = getProducts()

    get total(){
        return this.products.reduce((t, pr) => t +pr.price * pr.cnt, 0);
    }

    change(cnt, i){
        this.products[i].cnt = cnt;
    }
    remove(i){
        this.products.splice(i, 1);
    }
}

export default new Cart(); 

function getProducts(){
    return [
        {
            id: 100,
            title: 'Iphone 11',
            price: 1500,
            rest: 10,
            cnt: 1
        }, 
        {
            id: 101,
            title: 'Samsung A51',
            price: 900,
            rest: 5, 
            cnt: 1
        }
    ]
} 