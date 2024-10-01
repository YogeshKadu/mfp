import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
const history = createMemoryHistory();

const MountAuth = (
  el,
  { onNavigate, defaultHistory, initialPath, onSignIn }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      console.log("Auth nextPathname: ", nextPathname);

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devElement = document.getElementById("dev-auth");
  if (devElement)
    MountAuth(devElement, { defaultHistory: createBrowserHistory() });
}

export { MountAuth };
