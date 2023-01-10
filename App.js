
import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';




const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


function App() {
  return (
    <div className="App">
      
      

      <ThemeProvider theme ={theme}>

      <Main></Main>
      

      </ThemeProvider>
      

    </div>
  );
}


export default App;
