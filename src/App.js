import React from "react";
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes"

const theme = createMuiTheme({

    palette: {
      primary: {
        main: '#ad2b5f'
      },
    },
    props:{
      MuiTextField: {
        variant: 'outlined',
        fullWidth: true
      },
      MuiSelect: {
        variant: 'outlined',
        fullWidth: true
      }
    }


});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  </Provider>
)

export default App;