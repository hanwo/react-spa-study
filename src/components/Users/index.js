import React from 'react';
import {Route} from "react-router-dom";
// import Users from "./User";
// import UserDetail from "./UserList";
import UserList from "./UserListtest";
import UserDetail from "./Userdetailtest";

function Index({match}) {
    return (
        <>
            <h1>Users</h1>
            <Route exact path={match.path} component={UserList}/>
            <Route path={`${match.path}/:email`} component={UserDetail}/>
        </>
    );
}

export default Index;
