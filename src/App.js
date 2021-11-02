import React from "react";
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Routes from "./routes"
import { Loading, Notify, Alert, Confirm } from "./view/components";

const theme = createMuiTheme({

    palette: {
      primary: {
        main: '#F6B900'
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
      <Notify />
      <Confirm
       open={false}
       onClose={() => alert('close')}
       onConfirm={() => alert('confirm')}
      />
      <Loading />
      <Alert />
      <Routes/>
    </ThemeProvider>
  </Provider>
)

export default App;