import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginPage from "../LoginPage/LoginPage.jsx";
import RegisterPage from "../RegisterPage/RegisterPage.jsx";

const Home = () => {
    return(
        <>
            <Switch>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </>
    );
}

export default Home;