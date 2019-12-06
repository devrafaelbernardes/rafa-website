import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextApp } from './Contexts'
import { Header, Body, Footer } from './Pages/Struct';
import { RouterApp } from './Routers';
import { isAuthenticated, setToken, clearToken } from './Storage/Session';
import { ApolloProvider } from 'react-apollo';
import { clientGraphql, currentUser } from './Rest/Functions';

function App() {
  var [user, setUser] = useState(null);
  var [token, setTokenUser] = useState(null);
  var [authenticated, setAuthenticated] = useState(isAuthenticated());
  
  useEffect(() => {
    try {
      currentUser()
        .then(response => {
          if(response && response.data && response.data.response){
            setUser(response.data.response);
          }
        })
    } catch (error) {}
  }, [authenticated]);

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

  var valueContext = {
    authenticated,
    user,
    doLogin,
    doLogout,
    token
  };

  return (
    <ApolloProvider client={clientGraphql}>
      <Router>
        <ContextApp.Provider value={valueContext}>
          <Header />
          <Body>
            <RouterApp />
          </Body>
          <Footer />
        </ContextApp.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
