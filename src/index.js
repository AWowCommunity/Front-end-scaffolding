import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { injectGlobal } from "styled-components"
import { Provider } from "mobx-react"

const stores = {
    a: 1,
    b: 2
}
injectGlobal`
    html{}
    body{
        margin:0;
        padding:0;
    }
`
ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById("root")
)
