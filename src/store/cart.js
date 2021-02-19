import {makeObservable, observable, computed, action} from 'mobx';
// import productsStore from './products.js';

export default class {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.cart;
        this.storage= this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
        makeObservable(this, {
            products: observable,
            add: action,
            change: action,
            remove: action,
            load: action,
            total: computed,
            cartCnt: computed,
            productsInDetail: computed,
        });
    }
        
    products = [];

    get productsInDetail(){
        return this.products.map((pr) => {
            let product = this.rootStore.products.getById(pr.id);
           return {...product, cnt: pr.cnt};
        });
    }

    load(){
        this.api.load(this.token).then(data => {
            if(data.needUpdate){
                this.token = data.token;
                this.storage.setItem('cartToken', this.token);
            }
        });
    }

    get total(){
        return this.productsInDetail.reduce((t, pr) => {
            return t + pr.price * pr.cnt
        }, 0);
    }
    get cartCnt(){
        return this.products.length;
    }
    inCart(id){
        return this.products.some((pr) => pr.id === id);
    }
    add(id){
        this.api.add(this.token, id).then((res) => {
            console.log(res)
            if(!res){
                // let index = this.products.findIndex((pr) => pr.id === id);
                this.products.push({id, cnt: 1});
            }
        });
    }
    change(cnt, id){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.products[index].cnt = cnt;
        }
    }
    remove(id){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.api.remove(this.token, id).then(res => {
                this.products.splice(index, 1);
            }) 
        }
    }
}

// export default new Cart(); 

