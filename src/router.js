import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './compoents/Home/Home';
import Repositories from './compoents/Repositories/Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter> 
    )
}