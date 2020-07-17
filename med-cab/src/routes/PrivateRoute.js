import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
            render={(props) => 
                isAuthenticated ? (
                    <>
                        <Component {...props} />
                    </>
                ) : (
                    <Redirect to="/log-in" />
                )
            }      
        />
    );
};

export default PrivateRoute;