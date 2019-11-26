import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ContextApp } from '../Contexts';
import { Media, Bags, AddBag, AddMedia, EditBag, EditMedia } from '../Pages/Dashboard/Pages';
import { DashboardURL, ErrorURL, LoginURL } from './URLs';

function RouterDashboard() {
    let { authenticated } = useContext(ContextApp);
    const toLogin = LoginURL().REDIRECT.BASE;
    const toError = ErrorURL().REDIRECT.BASE;
    const DASHBOARD_REDIRECT = DashboardURL().ROUTER;
    return (
        <Switch>
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.MEDIA}
                authenticated={authenticated}
                componentAuthenticated={props => <Media {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.BAG}
                authenticated={authenticated}
                componentAuthenticated={props => <Bags {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.ADD_BAG}
                authenticated={authenticated}
                componentAuthenticated={props => <AddBag {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.ADD_MEDIA}
                authenticated={authenticated}
                componentAuthenticated={props => <AddMedia {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.EDIT_BAG}
                authenticated={authenticated}
                componentAuthenticated={props => <EditBag {...props} />}
                componentNotAuthenticated={props => <Redirect to={toLogin} />}
            />
            <ProtectedRoute 
                exact
                path={DASHBOARD_REDIRECT.EDIT_MEDIA}
                authenticated={authenticated}
                componentAuthenticated={props => <EditMedia {...props} />}
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