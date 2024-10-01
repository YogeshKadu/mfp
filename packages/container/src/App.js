import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
const MarketingLazyApp = lazy(() => import("./components/MarketingApp"));
const AuthLazyApp = lazy(() => import("./components/AuthApp"));

import Header from "./components/Header";
import Progress from "./components/Progress";

const GeneratedClassName = createGenerateClassName({
  productionPrefix: "co",
});

// App entrypoint
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
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
              <Route path={"/"} component={MarketingLazyApp} />
            </Switch>
          </Suspense>
          {/* <MarketingApp /> */}
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
