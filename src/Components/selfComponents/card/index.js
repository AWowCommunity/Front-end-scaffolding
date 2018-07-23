import React, { Component } from "react"
import styled from "styled-components"
import Office from "./office2.jpg"

const Container = styled.div`
    height: 330px;
    border-radius: 6px;
    color: #fff;
    background-image: url(${Office});
    background-size: cover;
    &::before {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: block;
        left: 0;
        top: 0;
        content: "";
        border-radius: 6px;
        border:1px solid red;
    }
`

class Card extends Component {
    render() {
        return (
            <Container>
                <h6>WORLDS</h6>
                <h3>The Best Productivity Apps on Market</h3>
                <p>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                </p>
            </Container>
        )
    }
}

export default Card
