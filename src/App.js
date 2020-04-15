import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import Header from 'Pages/Struct/Header';
import Body from 'Pages/Struct/Body';
import Footer from 'Pages/Struct/Footer';

import { RouterApp } from 'Routers';
import { client as clientGraphql } from 'Rest/ConfigAPI';
import Theme from 'styles/themes/Theme';
import Global from 'styles/Global';

function App() {
	return (
		<ApolloProvider client={clientGraphql}>
			<ThemeProvider theme={Theme}>
				<Router>
					<Header />
					<Body>
						<RouterApp />
					</Body>
					<Footer />
					<Global />
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
