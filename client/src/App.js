import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import AskQuestion from "./containers/AskQuestion";
import QuestionDetail from "./containers/QuestionDetail";
import Home from "./containers/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import Profile from "./components/Profile";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/askQuestion">
                <AskQuestion />
              </Route>
              <Route path="/question/:id">
                <QuestionDetail />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </PersistGate>
  );
}

export default App;
