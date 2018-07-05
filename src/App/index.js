import React, { Component } from "react";
import styled from "styled-components";
import Dropdwon from "../Components/Dropdwon/KitDropdwon";

import BG from "./bg5.jpg";

const Container = styled.div`
    background-image:url(${BG});
    height: 100vh;
    background-position: 100% 100%;
    background-size: cover;
}
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${bgcolor => (bgcolor.isFixed ? "#03a9f4" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${position => (position.isFixed ? "fixed" : "")};
`;
const WrapperBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTitleBox = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeaderTitle = styled.div`
  width: 730px;
  font-size: 53px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 20px 0;
`;
const HeaderSubTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 10px 0;
`;
const LeftBox = styled.div`
  width: 150px;
  color: #fff;
`;
const RightBox = styled.div`
  display: flex;
`;
const Content = styled.div`
  height: 300px;
  background-color: #00bcd4;
  display: flex;
  justify-content: center;
`;
const ContentPaper = styled.div`
  width: 90%;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;
const Footer = styled.div`
  background-color: #009688;
`;

class App extends Component {
    state = {
        isFixed: false
    };
    componentDidMount() {
        console.log(document.documentElement.offsetHeight)
        window.addEventListener('scroll',()=>{
            if (
                document.documentElement.scrollTop >= 80 ||
                document.body.scrollTop >= 80
            ) {
                this.setState({
                    isFixed:true
                })
            }else{
                this.setState({
                    isFixed:false
                })
            }

        })
    }
    render() {
        return (
            <Container>
                <Header isFixed={this.state.isFixed}>
                    <WrapperBox>
                        <LeftBox>Material Kit PRO </LeftBox>
                        <RightBox>
                            <Dropdwon buttonText="Components" buttonIcon="apps" />
                            <Dropdwon buttonText="Sections" buttonIcon="view_day" />
                            <Dropdwon buttonText="Examples" buttonIcon="view_carousel" />
                        </RightBox>
                    </WrapperBox>
                </Header>
                <HeaderTitleBox>
                    <HeaderTitle>
                        It is easy to see a person's integrity in his fate
          </HeaderTitle>
                    <HeaderSubTitle>
                        Life is full of noise and riots, but there is no point in it.
          </HeaderSubTitle>
                </HeaderTitleBox>
                <Content>
                    <ContentPaper>内容</ContentPaper>
                </Content>
                {/* <Footer>底部</Footer> */}
            </Container>
        );
    }
}

export default App;
