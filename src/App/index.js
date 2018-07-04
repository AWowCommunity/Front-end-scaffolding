import React, { Component } from "react"
import styled from "styled-components"
import Dropdwon from "../Components/Dropdwon/CustomDropdown"
import Icon from "@material-ui/core/Icon"
import BG from './bg5.jpg'

const Container = styled.div`
    background-image:url(${BG});
    height: 100vh;
    background-position: 100% 100%;
    background-size: cover;
}
`
const Header = styled.div`
    height: 80px;
    background-color: #03a9f4;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WrapperBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LeftBox = styled.div`
    width: 150px;
    color: #fff;
`
const RightBox = styled.div`
    display: flex;
`
const IconStyled = styled(Icon)`
    margin-right:6px;
`
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
                        <RightBox>
                            <Dropdwon
                                buttonText="Components"
                                buttonIcon={() => <IconStyled>apps</IconStyled>}
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
                            <Dropdwon
                                buttonText="Sections"
                                buttonIcon={() => <IconStyled>view_day</IconStyled>}
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
                            <Dropdwon
                                buttonText="Examples"
                                buttonIcon={() => <IconStyled>view_carousel</IconStyled>}
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
                        </RightBox>
                    </WrapperBox>
                </Header>
                {/* <Content>内容</Content>
                <Footer>底部</Footer> */}
            </Container>
        )
    }
}

export default App
