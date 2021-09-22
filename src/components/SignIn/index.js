import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {login} from '../../actions/auth';

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password)).then(() => {
                props.history.push('/user');
                window.location.reload();
            }).catch(() => {
                alert("로그인 에러")
            });
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}>
            <form
                onSubmit={onSubmitHandler}
                style={{display: "flex", flexDirection: "column"}}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHanlder}/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default SignIn;
