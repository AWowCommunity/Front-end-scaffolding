import React from "react"

import NavPills from "./NavPills.js"

function Example({ ...props }) {
    return (
        <NavPills
            color="primary"
            alignCenter={true}
            tabs={[
                {
                    tabButton: "Profile",
                    tabContent: (
                        <span>
                            第一页
                        </span>
                    )
                },
                {
                    tabButton: "Settings",
                    tabContent: (
                        <span>
                            第二页
                        </span>
                    )
                },
                {
                    tabButton: "Options",
                    tabContent: (
                        <span>
                            第三页
                        </span>
                    )
                }
            ]}
        />
    )
}
export default Example
