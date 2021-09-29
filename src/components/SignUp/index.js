import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {register} from '../../actions/auth';

const SignUp = (props) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setName] = useState("");
    const dispatch = useDispatch();

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };

    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(register(userName, email, password)).then(() => {
            props.history.push('/signIn');
            window.location.reload();
        }).catch((e) => {
            console.log(e);
            alert("회원가입 에러")
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
                style={{ display: "flex", flexDirection: "column" }}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="test" value={userName} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHanlder} />
                <br/>
                <button type="submit">회원 가입</button>
            </form>
        </div>
    );
}

export default SignUp;
