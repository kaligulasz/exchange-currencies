import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import theme from '../common/themeVariables';

// Components
import Main from './Main';
import Exchange from './Exchange';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  body {
    color: ${theme.color.white};
    font: 100% BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Router>
        <Fragment>
          <Route path="/" component={Main} exact />
          <Route path="/exchange" component={Exchange} />
        </Fragment>
      </Router>
    </Fragment>
  </ThemeProvider>
);


export default App;
