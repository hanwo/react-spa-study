import React, {useEffect, useState} from 'react';
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service';
import {deleteUser, editUser} from "../../actions/user";
import {useDispatch} from "react-redux";


const Users = (props) => {
    const [users, setUsers] = useState(null);
    const [selectedUsers, setselectedUsers] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (!users) {
            setUsers([]);
            getUserList(0);
        }
    }, [users]);

    function getUserList() {
        AuthService.check(user.accessToken).then((response) => {
            if(response){
                UserService.getAll().then((response) => {
                    console.log(response);
                    setUsers(response.content)
                }).catch((e) => {
                    alert(e);
                })
            }
        }).catch((e) => {
            AuthService.logout();
        })
    }

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
            if (response.status === 200) {
                console.log(response);
            }
            return response;
        }).catch((e) => {
            alert("회원 삭제 에러")
        });
    }

    function userDetail(email) {
        UserService.get(email).then((response) => {
            setselectedUsers(true);
            setUsers(response)
        })
    }

    if (!users) return null;

    return (
        <>
            <h2>User List</h2>
            <ul>
                selectedUsers ?
                {users.map(user => (
                    <UserList user={user}
                                userDetail={userDetail}
                    />
                ))} :
                {users.map(user => (
                    <UserDetail user={user}
                                edit={userDetail}
                        editInfo={editInfo}
                        delUser={delUser}
                    />
                ))}
            </ul>
        </>
    );
}

export default Users;
