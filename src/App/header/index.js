import React, { Component } from "react"
import styled from "styled-components"
import KitButton from "../../Components/Button/KitButton"
import NavBar from "../../Components/Nav"
import BG from "./bg5.jpg"

const Container = styled.div``
const HeaderTitleBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
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
const HeaderContainer = styled.div`
  background-image: url(${BG});
  height: 100vh;
  background-position: 100% 100%;
  background-size: cover;
  z-index: 1;
  padding-top: 80px;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`
class Header extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <HeaderContainer>
          <HeaderTitleBox>
            <HeaderTitle>
              It is easy to see a person's integrity in his fate
            </HeaderTitle>
            <HeaderSubTitle>
              Life is full of noise and riots, but there is no point in it.
            </HeaderSubTitle>
            <KitButton>READ MORE</KitButton>
          </HeaderTitleBox>
        </HeaderContainer>
      </Container>
    )
  }
}

export default Header
