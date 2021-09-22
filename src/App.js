import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Router, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import signIn from "./components/SignIn";
import homePage from "./components/HomePage";
import signUp from "./components/SignUp";
import user from "./components/Users";
import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";
import {history} from "./helpers/history";
import EventBus from "./common/EventBus";

const App = () => {
    const [, setShowModeratorBoard] = useState(false);
    const [, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        bezKoder
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    User
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/signIn" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/signIn" className="nav-link">
                                    login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/signUp" className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={homePage} />
                        <Route exact path="/signIn" component={signIn} />
                        <Route exact path="/signUp" component={signUp} />
                        <Route exact path="/user" component={user} />
                    </Switch>
                </div>

                {/* <AuthVerify logOut={logOut}/> */}
            </div>
        </Router>
    );
};

export default App;
