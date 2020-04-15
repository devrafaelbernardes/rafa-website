import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from 'Routers/ProtectedRoute';
import { HomeURL, MediaURL, AboutURL, SocialNetworkURL } from 'Routers/URLs';

import Home from 'Pages/Home';
import Media from 'Pages/Media';
import About from 'Pages/About';
import SocialNetwork from 'Pages/SocialNetwork';
import PageNotFound from 'Pages/Error/PageNotFound';


export function RouterApp() {
    return (
        <Switch>
            <ProtectedRoute 
                exact
                path={HomeURL().ROUTER.BASE}
                componentAuthenticated={props => <Home {...props} />}
                componentNotAuthenticated={props => <Home {...props} />}
            />
            <ProtectedRoute
                path={MediaURL().ROUTER.BASE}
                componentAuthenticated={props => <Media {...props} />}
                componentNotAuthenticated={props => <Media {...props} />}
            />
            <ProtectedRoute
                path={SocialNetworkURL().ROUTER.BASE}
                componentAuthenticated={props => <SocialNetwork {...props} />}
                componentNotAuthenticated={props => <SocialNetwork {...props} />}
            />
            <ProtectedRoute
                path={AboutURL().ROUTER.BASE}
                componentAuthenticated={props => <About {...props} />}
                componentNotAuthenticated={props => <About {...props} />}
            />
            <ProtectedRoute 
                componentAuthenticated={props => <PageNotFound {...props} />}
                componentNotAuthenticated={props => <PageNotFound {...props} />}
            />
        </Switch>
    );
}

export default RouterApp;