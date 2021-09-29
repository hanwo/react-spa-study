import React, {useEffect, useState} from 'react';
import UserDetail from "./UserDetail";
import UserService from '../../services/user.service';
import {deleteUser, editUser} from "../../actions/user";
import {useDispatch} from "react-redux";


const UserList = (props) =>{
    const [users, setUsers] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            setUsers(null);
            const response = await UserService.getAll();
            setUsers(response);
        };
        fetchUsers();
    }, []);

    function editInfo(email, name) {
        dispatch(editUser(name, email)).then((response) => {
            console.log(response);
            return response;
        }).catch((e) => {
            console.log(e);
            alert("회원 수정 에러")
        });
    }

    function delUser(email) {
        dispatch(deleteUser(email)).then((response) => {
            if(response.status === 200) {
                console.log(response);
            }
            return response;
        }).catch((e) => {
            console.log(e);
            alert("회원 삭제 에러")
        });
    }

    if (!users) return null;

    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.content.map(user => (
                    <UserDetail user={user}
                                editInfo={editInfo}
                                delUser={delUser}/>
                ))}
            </ul>
        </>
    );
}

export default UserList;
