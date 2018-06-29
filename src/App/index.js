import React, { Component } from "react"
import styled from "styled-components"
import Dropdwon from '../Components/Dropdwon/CustomDropdown'
const Container = styled.div``
const Header = styled.div`
    height: 80px;
    background-color: #03a9f4;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WrapperBox = styled.div`
    width: 80%;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LeftBox = styled.div`
    width: 150px;
    color: #fff;
`
const RightBox = styled.div``
const Content = styled.div`
    background-color: #00bcd4;
`
const Footer = styled.div`
    background-color: #009688;
`

class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <WrapperBox>
                        <LeftBox>Material Kit PRO </LeftBox>
                        <RightBox>Right</RightBox>
                    </WrapperBox>
                    <Dropdwon
                        buttonText="Regular"
                        dropdownList={[
                            "Action",
                            "Another action",
                            "Something else here",
                            { divider: true },
                            "Separated link",
                            { divider: true },
                            "One more separated link"
                        ]}
                    />
                </Header>
                {/* <Content>内容</Content>
                <Footer>底部</Footer> */}
            </Container>
        )
    }
}

export default App
