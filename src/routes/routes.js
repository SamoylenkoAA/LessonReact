import Cart from '~p/cart/cart.js';
import Order from '~p/order/order.js';
import Result from '~p/result/result.js';
import Post from '~p/post/post.js';
import Error404 from '~p/error404/error404.js';

let routes = [
    {
        name: 'home',
        url: '/',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        name: 'post',
        url: '/post/:some',
        component: Post,
        exact: true
    },
    {
        url: '**',
        component: Error404
    }
];

let routesMap = {};

routes.map((route) =>{
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url; 
    }   
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
         return null;
    }
    
    let url = routesMap[name]; // /post/:some

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }
    return url;
}

export default routes;
export {routesMap, urlBuilder};