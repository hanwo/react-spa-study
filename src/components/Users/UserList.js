import React from 'react';
// import {users} from "./data.json";
import {useDispatch} from "react-redux";
import {getAll} from "../../actions/user";

function UserList({match}) {
    const dispatch = useDispatch();
    let userlist;
    dispatch(getAll()).then((response) => {
        console.log(response);
        userlist = response
    }).catch((e) => {
        console.log(e)
    })
    return (
        <>
            <h2>User List</h2>
            {userlist}
            <ul>
                {userlist}ㄹ
                {/*{users.map(({id, name}) => (*/}
                {/*    <li key={id}>*/}
                {/*        <Link to={`${match.url}/${id}`}>{name}</Link>*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </>
    );
}

export default UserList;
