import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import 'typeface-montserrat';

const theme = createMuiTheme({  
  typography: {
    fontFamily: 
      '"montserrat", sans-serif',
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          fontSize: "0.75em",
          fontWeight: "400",
          color: "#999cad"
        },
        
      }
    }
  }
});

const AppTheme = ({children}) => {

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}

export default AppTheme