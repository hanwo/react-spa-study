import React from "react";

function UserDetail(data) {

    // const editUser = () => {
    //     data.editInfo(data.user.email, data.user.name);
    // }
    //
    // const deleteUser = () => {
    //     data.delUser(data.user.email);
    // }
    const userDetail = (email) => {

    }

    return (
        <>
            <dt>Email : {data.user.email}</dt>
            <dt>Name : {data.user.name}</dt>
            <button onClick={userDetail(data.user.email)}>개인정보</button>
            {/*<button onClick={editUser}>수정</button> <span></span>*/}
            {/*<button onClick={deleteUser}>삭제</button>*/}
            {/*<br></br>*/}
        </>
    );
}

export default UserDetail;
