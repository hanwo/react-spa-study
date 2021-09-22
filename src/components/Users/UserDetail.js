import React from "react";
import {users} from "./data.json";

function UserDetail({match, history}) {
    const user = users.find((user) => user.id === match.params.id);
    return (
        <>
            <h2>User Detail</h2>
            <dt>id: {user.id} </dt>
            <dt>name : {user.name}</dt>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    );
}

export default UserDetail;
