import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ContextApp } from '../Contexts';
import { Home } from '../Pages/Dashboard/Pages';
import { Login } from '../Pages';
import { DashboardURL, ErrorURL } from './URLs';

function RouterDashboard() {
    var { authenticated } = useContext(ContextApp);
    return (
        <Switch>
            <ProtectedRoute 
                exact
                path={DashboardURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <Home {...props} />}
                componentNotAuthenticated={props => <Login {...props} />}
            />
            <ProtectedRoute 
                authenticated={authenticated}
                componentAuthenticated={props => <Redirect to={ErrorURL().REDIRECT.BASE} />}
                componentNotAuthenticated={props => <Redirect to={ErrorURL().REDIRECT.BASE} />}
            />
        </Switch>
    );
}

export { RouterDashboard };
export default RouterDashboard;