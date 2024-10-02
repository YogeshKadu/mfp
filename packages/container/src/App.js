import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
const MarketingLazyApp = lazy(() => import("./components/MarketingApp"));
const AuthLazyApp = lazy(() => import("./components/AuthApp"));
const DashboardLazyApp = lazy(() => import("./components/DashboardApp"));

import Header from "./components/Header";
import Progress from "./components/Progress";

const GeneratedClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

// App entrypoint!!
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={GeneratedClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={"/auth"}>
                <AuthLazyApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path={"/dashboard"}>
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazyApp />
              </Route>
              <Route path={"/"} component={MarketingLazyApp} />
            </Switch>
          </Suspense>
          {/* <MarketingApp /> */}
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
