import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { injectGlobal } from "styled-components"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from "./App"
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#03a9f4',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ff4d6c',
            contrastText: '#fff'
        }
      },
});
injectGlobal`
    html {
    }
    body {
        margin: 0;
        padding:0;
    }
`
ReactDOM.render(
    <Provider>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
)
