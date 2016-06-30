import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexPage from './js/indexPage'

ReactDOM.render(
  <MuiThemeProvider>
  	<IndexPage/>
  </MuiThemeProvider>,
  document.querySelector('#root')
);
