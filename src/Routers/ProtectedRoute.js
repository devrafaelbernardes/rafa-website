import React from "react";
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ redirectAuthenticatedURL, redirectNotAuthenticatedURL, componentNotAuthenticated: ComponentNotAuthenticated, componentAuthenticated: ComponentAuthenticated, ...props }){
    const authenticated = false;
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

export default ProtectedRoute;