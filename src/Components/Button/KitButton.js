import React, { Component } from "react"
import styled from 'styled-components'
import Icon from "@material-ui/core/Icon"
import Button from "./Button"

const StyledIcon = styled(Icon)`
    margin-right:6px;
    font-size:16px !important;
`

class KitButton extends Component {
    render() {
        return (
            <Button  color="primary" size='lg'>
                <StyledIcon>format_align_left</StyledIcon>
                {this.props.children}
            </Button>
        )
    }
}

export default KitButton
