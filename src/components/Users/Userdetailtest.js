import React, {useEffect, useState} from "react";
import UserService from "../../services/user.service";

function UserDetail({ match, history }) {
    console.log(match);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            setUser([])
            getUserDetail();
        }
    }, [user, match]);

    function getUserDetail() {
        UserService.get(match.param.email).then((response) => {
            console.log(response);
            setUser(response.content)
        }).catch((e) => {
            alert(e);
        })
    }
    return (
        <>
            <h2>User Detail</h2>
            <dt>seq</dt>
            <dd>{user.seq}</dd>
            <dt>name</dt>
            <dd>{user.name}</dd>
            <dt>email</dt>
            <dd>{user.email}</dd>
            <dt>role</dt>
            <dd>{user.authority}</dd>
            <dt>password</dt>
            <dd>{user.password}</dd>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    );
}

export default UserDetail;
