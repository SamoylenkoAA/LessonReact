import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '~/routes/routes.js';

export default function(){ 
    return (
        <>
            <h1>Error 404, page not found</h1>
            <div className="alert alert-warning">
                <Link to={routesMap.products}>Go to home page</Link>
            </div>
        </>
    )
}