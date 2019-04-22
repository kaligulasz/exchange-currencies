import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';

import theme from '../common/themeVariables';

// Components
import Main from './Main';

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
      <Main />
    </Fragment>
  </ThemeProvider>
);

export default App;
