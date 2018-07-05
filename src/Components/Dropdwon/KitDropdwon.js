import React from "react"
import Icon from "@material-ui/core/Icon"
import styled from "styled-components"

import CustomDropdown from "./CustomDropdown"

const IconStyled = styled(Icon)`
    margin-right:6px;
`
function KitDropdown({ ...props }) {
    return (
        <div>
            <CustomDropdown
             buttonText={props.buttonText}
             buttonIcon={() => <IconStyled>{props.buttonIcon}</IconStyled>}
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
        </div>
    )
}

export default KitDropdown
