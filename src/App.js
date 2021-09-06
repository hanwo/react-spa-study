import React from 'react';
import SignUp from './SIgnUp/SIgnUp';
import Login from './SignIn/Login';
import Users from './Users/Users';
import Error from './Error';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Login</button>
                </Link>
                <Link to="/SignUp">
                    <button>회원가입</button>
                </Link>
                <Link to="/users">
                    <button>목록</button>
                </Link>
            </header>
            <hr/>
            <main>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/users" component={Users}/>
                    <Route component={Error} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
