import {makeObservable, observable, computed, action} from 'mobx';

export default class {
    constructor(rootStore) {
        makeObservable(this, {
            items: observable,
            productsMap: computed,
            load: action
        })
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
    }
    items = [];

    get productsMap(){
        let map = {};

        this.items.forEach((item, i) => {
            map[item.id.toString()] = i;
        })

        return map;
    }

    load(){
        return new Promise((resolve, reject) => {
            this.api.all().then((data) =>{
                this.items = data;
                resolve(true);
            });
        })
    }

    getById(id){

        let index = this.productsMap[id];

        if(index === undefined){
            return null;
        }

        return this.items[index];
    }
}

// export default new Products();


// function getProducts(){
//     return [
//         {
//             id: 100,
//             title: 'Iphone 11',
//             price: 1500,
//             rest: 10
//         }, 
//         {
//             id: 101,
//             title: 'Samsung A51',
//             price: 900,
//             rest: 5
//         }, 
//         {
//             id: 102,
//             title: 'Sony A51',
//             price: 900,
//             rest: 5
//         }, 
//         {
//             id: 103,
//             title: 'Nokia A51',
//             price: 900,
//             rest: 5
//         }
//     ]
// } 