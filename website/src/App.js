import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextApp } from './Contexts'
import { Header, Body, Footer } from './Pages/Struct';
import { RouterApp } from './Routers';
import { isAuthenticated } from './Storage/Session';

function App() {
  var [authenticated] = useState(isAuthenticated());

  var valueContext = {
    authenticated
  };

  return (
    <Router>
      <ContextApp.Provider value={valueContext}>
        <Header />
        <Body>
          <RouterApp />
        </Body>
        <Footer />
      </ContextApp.Provider>
    </Router>
  );
}

export default App;
