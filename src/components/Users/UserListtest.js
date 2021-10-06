import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../../services/user.service";

function UserList({match}) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (!users) {
            getUserList();
        }
    }, [users]);

    function getUserList() {
        UserService.getAll().then((response) => {
            setUsers(response.content)
        }).catch((e) => {
            alert(e);
        })
    }

    if (!users) return null;

    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.seq}>
                        <Link to={`${match.url}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
