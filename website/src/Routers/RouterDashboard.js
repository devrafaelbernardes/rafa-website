import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ContextApp } from '../Contexts';
import { Home, Media, Bags } from '../Pages/Dashboard/Pages';
import { DashboardURL, ErrorURL, LoginURL } from './URLs';

function RouterDashboard() {
    var { authenticated } = useContext(ContextApp);
    var toLogin = LoginURL().REDIRECT.BASE;
    var toError = ErrorURL().REDIRECT.BASE;
    return (
        <Switch>
            <ProtectedRoute 
                exact
                path={DashboardURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <Home {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DashboardURL().ROUTER.MEDIA}
                authenticated={authenticated}
                componentAuthenticated={props => <Media {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DashboardURL().ROUTER.BAG}
                authenticated={authenticated}
                componentAuthenticated={props => <Bags {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                authenticated={authenticated}
                componentAuthenticated={props => <Redirect to={toError} />}
                componentNotAuthenticated={props => <Redirect to={toError} />}
            />
        </Switch>
    );
}

export { RouterDashboard };
export default RouterDashboard;