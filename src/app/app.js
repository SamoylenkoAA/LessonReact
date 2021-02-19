import React from 'React';
import styles from './list.module.css';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import routes, { routesMap} from '~/routes/routes.js';
import rootStore from '~s/rootStore.js';
class App extends React.Component{
    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url} 
                          component={route.component} 
                          exact={route.exact}
                          key={route.url}
                    />
        });

        return(
            <Router>
                <header className='container-fluid'>
                    <div className='row justify-content-between'>
                        <div className='col col-10'>
                            <div className="alert alert-secondary">Site name</div>
                        </div>
                        <div className="col col-2">
                            <strong>
                                In Cart: {rootStore.cart.cartCnt}
                                <br/>
                                Total: {rootStore.cart.total}
                            </strong>
                        </div>
                    </div>
                </header>
                <div className='container-fluid'>
                    <div className={styles.margin}>
                        <div className='row'>
                            <div className='col-2'>
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        <NavLink to={routesMap.products} 
                                                 exact activeClassName = {styles.active}>
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className='list-group-item'>
                                        <NavLink to={routesMap.cart}
                                                 activeClassName = {styles.active}>
                                            Cart
                                        </NavLink>
                                    </li>
                                    <li className='list-group-item'>
                                        <NavLink to={routesMap.order}
                                                 activeClassName = {styles.active}>
                                            Order
                                        </NavLink>
                                    </li>
                                    <li className='list-group-item'>
                                        <NavLink to={routesMap.result}
                                                 activeClassName = {styles.active}>
                                            Done
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-10'>
                                <Switch>
                                    {routesComponents}   
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default observer(App);
