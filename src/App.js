import React, { lazy } from "react";

import GlobalStyles from "./GlobalStyle";
import { Suspense } from "react";
import styled from "styled-components";

const Gist = lazy(() => import("./components/Gist"));
const Header = lazy(() => import("./components/Header"));

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Wrapper className="App" data-testid="app">
        <Header />
        <GlobalStyles />
        <Gist />
      </Wrapper>
    </Suspense>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
