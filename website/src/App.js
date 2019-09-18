import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextApp } from './Contexts'
import { Header, Body, Footer } from './Pages/Struct';
import { RouterApp } from './Routers';
import { isAuthenticated } from './Storage/Session';
import { ApolloProvider } from 'react-apollo';
import { clientGraphql } from './Rest/Functions';

function App() {
  var [authenticated] = useState(isAuthenticated());

  var valueContext = {
    authenticated
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
