import React, { Component } from "react";
import styled from "styled-components";
import Office from "./office2.jpg";

const Container = styled.div`
  height: 330px;
  border-radius: 6px;
  color: #fff;
  padding: 40px 20px;
  background-image: url(${Office});
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &::after {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.56);
    border-radius: 6px;
  }
`;
const StyledH3 = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: Roboto Slab, Times New Roman, serif;
  margin: 20px 0;
  z-index: 2;
`;
const StyledP = styled.div`
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin-top: 10px;
  color: hsla(0, 0%, 100%, 0.7) !important;
  z-index: 2;
`;
const StyledH6 = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: hsla(0, 0%, 100%, 0.7) !important;
  margin: 10px 0;
  z-index: 2;
`;
class Card extends Component {
  render() {
    return (
      <Container>
        <StyledH6>
          {this.props.cardLable ? this.props.cardLable : "WORLDS"}
        </StyledH6>
        <StyledH3>
          {this.props.cardTitle
            ? this.props.cardTitle
            : "The Best Productivity Apps on Market"}
        </StyledH3>
        <StyledP>
          {this.props.cardContent
            ? this.props.cardContent
            : `Don't be scared of the truth because we need to restart the human
            foundation in truth And I love you like Kanye loves Kanye I love Rick
            Owens’ bed design but the back is...`}
        </StyledP>
      </Container>
    );
  }
}

export default Card;
