import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextApp } from './Contexts'
import { Header, Body, Footer } from './Pages/Struct';
import { RouterApp } from './Routers';
import { isAuthenticated, setToken, clearToken } from './Storage/Session';
import { ApolloProvider } from 'react-apollo';
import { clientGraphql } from './Rest/ConfigAPI';
import { currentUser } from './Rest/query';
import { LoadingComponent } from './GeneralComponents';

function App() {
  var [user, setUser] = useState(null);
  var [loading, setLoading] = useState(true);
  var [reload, setReload] = useState(false);
  var [token, setTokenUser] = useState(null);
  var [authenticated, setAuthenticated] = useState(isAuthenticated());
  
  useEffect(() => {
    try {
      currentUser()
        .then(response => {
          if(response && response.data && response.data.response){
            setUser(response.data.response);
          }
          setLoading(false);
        })
        .catch(e => setLoading(false))
    } catch (error) {
      setLoading(false);
    }
  }, [authenticated, reload]);

  const doLogin = async(token) => {
    if(token){
        await setToken(token);
        await setTokenUser(token);
        await setAuthenticated(true);
    }
  }
  const doLogout = async() => {
    await clearToken();
    await setAuthenticated(false);
  }
  const reloadPage = () => {
    setReload(!reload);
  }

  var valueContext = {
    authenticated,
    user,
    doLogin,
    doLogout,
    token,
    reloadPage
  };

  return (
    <ApolloProvider client={clientGraphql}>
      <Router>
        <ContextApp.Provider value={valueContext}>
          <LoadingComponent loading={loading}>
            <Header />
            <Body>
              <RouterApp />
            </Body>
            <Footer />
          </LoadingComponent>
        </ContextApp.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
