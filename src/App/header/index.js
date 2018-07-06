import React, { Component } from "react"
import styled from "styled-components"
import Dropdwon from "../../Components/Dropdwon/KitDropdwon"
import KitButton from '../../Components/Button/KitButton'

const Container = styled.div`
    z-index:2;
    position: relative;
`
const Nav = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${bgcolor => (bgcolor.isFixed ? "#03a9f4" : "")};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transition:.45s;
`
const NavContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderTitleBox = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const HeaderTitle = styled.div`
    width: 730px;
    font-size: 53px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin: 20px 0;
`
const HeaderSubTitle = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin: 10px 0;
`
const LeftBox = styled.div`
    width: 150px;
    color: #fff;
`
const RightBox = styled.div`
    display: flex;
`
class Header extends Component {
    state = {
        isFixed: false
    }
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (
                document.documentElement.scrollTop >= 80 ||
                document.body.scrollTop >= 80
            ) {
                this.setState({
                    isFixed: true
                })
            } else {
                this.setState({
                    isFixed: false
                })
            }
        })
    }
    render() {
        return (
            <Container>
                <Nav isFixed={this.state.isFixed}>
                    <NavContainer>
                        <LeftBox>Material Kit PRO </LeftBox>
                        <RightBox>
                            <Dropdwon
                                buttonText="Components"
                                buttonIcon="apps"
                            />
                            <Dropdwon
                                buttonText="Sections"
                                buttonIcon="view_day"
                            />
                            <Dropdwon
                                buttonText="Examples"
                                buttonIcon="view_carousel"
                            />
                        </RightBox>
                    </NavContainer>
                </Nav>
                <HeaderTitleBox>
                    <HeaderTitle>
                        It is easy to see a person's integrity in his fate
                    </HeaderTitle>
                    <HeaderSubTitle>
                        Life is full of noise and riots, but there is no point
                        in it.
                    </HeaderSubTitle>
                    <KitButton>READ MORE</KitButton>
                </HeaderTitleBox>
            </Container>
        )
    }
}

export default Header
