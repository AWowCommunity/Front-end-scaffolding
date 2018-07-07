import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Header from "./header";
import NavPills from "../Components/NavPills/index";
import BG from "./bg5.jpg";

const HeaderContainer = styled.div`
  background-image: url(${BG});
  height: 100vh;
  background-position: 100% 100%;
  background-size: cover;
  z-index: 1;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;
const Content = styled.div`
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`;
const ContentPaper = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -150px;
  z-index: 2;
`;
const ContentPaperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Footer = styled.div`
  background-color: #009688;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content>
          <ContentPaper>
            <ContentPaperContainer>
              <NavPills />
            </ContentPaperContainer>
          </ContentPaper>
        </Content>
        <Footer>底部</Footer>
      </Fragment>
    );
  }
}

export default App;
