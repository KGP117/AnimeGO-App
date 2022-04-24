import React, {Component} from "react";
import {Router,Switch,Route} from "react-router-dom";

import Info from "./Info/Info";
import Search from "./Search/Search";
import WatchList from "./WatchList/WatchList";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component{

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Search" component={Search}/>
                    <Route  path="/Info" exact component={Search}/>
                    <Route exact path="/Info/:id" component={Info}/>
                    <Route path="/WatchList" exact component={WatchList}/>
                </Switch>
            </Router>
        )
    }

}