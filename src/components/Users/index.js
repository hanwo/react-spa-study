import React from 'react';
import {Route} from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function Index({match}) {
    return (
        <>
            <Route exact path={match.path} component={UserList}/>
            <Route path={`${match.path}/:id`} component={UserDetail}/>
        </>
    );
}

export default Index;
