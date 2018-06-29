import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { injectGlobal } from "styled-components"

import App from "./App"

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
        <App />
    </Provider>,
    document.getElementById("root")
)
