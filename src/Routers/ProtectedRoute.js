import React from "react";
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


function ProtectedRoute(props){
    var { authenticated, redirectAuthenticatedURL, redirectNotAuthenticatedURL, componentNotAuthenticated: ComponentNotAuthenticated, componentAuthenticated: ComponentAuthenticated } = props;
    redirectAuthenticatedURL = redirectAuthenticatedURL ? redirectAuthenticatedURL : "";
    redirectNotAuthenticatedURL = redirectNotAuthenticatedURL ? redirectNotAuthenticatedURL : "";

    return (
        <Route
            {...props}
            render={props => (
                authenticated ? (
                    ComponentAuthenticated ? (
                        <ComponentAuthenticated {...props} />
                    ) : (
                        <Redirect to={redirectAuthenticatedURL} />
                    )
                ) : (
                    ComponentNotAuthenticated ? (
                        <ComponentNotAuthenticated {...props} />
                    ) : (
                        <Redirect to={redirectNotAuthenticatedURL} />
                    )
                )
            )}
        />
    );
}

ProtectedRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    redirectAuthenticatedURL: PropTypes.string,
    redirectNotAuthenticatedURL: PropTypes.string,
};

export default ProtectedRoute;