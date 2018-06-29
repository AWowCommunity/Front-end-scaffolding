import React from "react"

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"

function KitDropdown({ ...props }) {
    return (
        <div>
            <CustomDropdown
                buttonText="Regular"
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
