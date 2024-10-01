import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignUp from "./component/Signup";
import SignIn from "./component/Signin";

const GeneratedClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={GeneratedClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              {/* component={SignIn} */}
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              {/* component={SignUp} */}
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
