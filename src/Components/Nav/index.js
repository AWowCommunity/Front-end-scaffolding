import React, { Component } from "react"
import styled from "styled-components"
import Dropdwon from '../Dropdwon/KitDropdwon'

const Container = styled.div``
const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${bgcolor => (bgcolor.isFixed ? "#03a9f4" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:99;
  transition: 0.45s;
`
const NavContainer = styled.div`
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

class NavBar extends Component {
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
                            <Dropdwon buttonText="Components" buttonIcon="apps" />
                            <Dropdwon buttonText="Sections" buttonIcon="view_day" />
                            <Dropdwon buttonText="Examples" buttonIcon="view_carousel" />
                        </RightBox>
                    </NavContainer>
                </Nav>
            </Container>
        )
    }
}

export default NavBar
