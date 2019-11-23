import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextApp } from './Contexts'
import { Header, Body, Footer } from './Pages/Struct';
import { RouterApp } from './Routers';
import { isAuthenticated, setToken } from './Storage/Session';
import { ApolloProvider } from 'react-apollo';
import { clientGraphql, currentUser } from './Rest/Functions';

function App() {
  var [user, setUser] = useState(null);
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
        await setAuthenticated(true);
    }
  }

  var valueContext = {
    authenticated,
    user,
    doLogin
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
