import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ContextApp } from '../Contexts';
import { Home, Media, About, Error, Dashboard } from '../Pages';
import { HomeURL, MediaURL, AboutURL, DashboardURL } from './URLs';

function RouterApp() {
    var { authenticated } = useContext(ContextApp);
    return (
        <Switch>
            <ProtectedRoute 
                exact
                path={HomeURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <Home {...props} />}
                componentNotAuthenticated={props => <Home {...props} />}
            />
            <ProtectedRoute 
                exact
                path={MediaURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <Media {...props} />}
                componentNotAuthenticated={props => <Media {...props} />}
            />
            <ProtectedRoute 
                exact
                path={AboutURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <About {...props} />}
                componentNotAuthenticated={props => <About {...props} />}
            />
            <ProtectedRoute
                path={DashboardURL().ROUTER.BASE}
                authenticated={authenticated}
                componentAuthenticated={props => <Dashboard {...props} />}
                componentNotAuthenticated={props => <Dashboard {...props} />}
            />
            <ProtectedRoute 
                authenticated={authenticated}
                componentAuthenticated={props => <Error {...props} />}
                componentNotAuthenticated={props => <Error {...props} />}
            />
        </Switch>
    );
}

export { RouterApp };
export default RouterApp;