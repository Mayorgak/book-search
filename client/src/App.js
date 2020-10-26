import React from 'react';

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import SignupForm from "./components/SignupForm";
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <Router>
      <>
        {" "}
        <ApolloProvider client={client}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/signupform" component={SignupForm} />
            <Route exact path="/loginform" component={LoginForm} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </ApolloProvider>
      </>
    </Router>
  );
}

export default App;
