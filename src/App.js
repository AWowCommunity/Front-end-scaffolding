import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
    color: #2196f3;
`
const Subtitle = styled.div`
    margin-top: 20px;
    color: #1976d2;
`
class App extends Component {
    render() {
        return (
            <Container>
                <Title>This is a reactjs scaffolding</Title>
                <Subtitle>
                    Technology stack includes：react.js、styled-components、mobx,
                    tools: parcel、yarn ...
                </Subtitle>
            </Container>
        )
    }
}

export default App
