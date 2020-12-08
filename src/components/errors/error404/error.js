import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '~/routes/routes.js';

export default class extends React.Component{
    render(){
        return (
            <>
                <h1>Error 404, page not found</h1>
                <div className="alert alert-warning">
                    <Link to={routesMap.home}>Go to home page</Link>
                </div>
            </>
        )
    }
}