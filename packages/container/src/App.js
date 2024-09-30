import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const GeneratedClassName = createGenerateClassName({
  productionPrefix: "co",
});

// App entrypoint
function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={GeneratedClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
