import React, { Component } from "react"

import NavPills from "./NavPills.js"
import CardContainer from '../selfComponents/cardContainer'
class NavPillsExample extends Component {
    render() {
        return (
            <NavPills
                color="primary"
                alignCenter={true}
                tabs={[
                    {
                        tabButton: "Profile",
                        tabContent: (
                            <div>
                                <CardContainer>
                                </CardContainer>
                            </div>
                        )
                    },
                    {
                        tabButton: "Settings",
                        tabContent: (
                            <div>
                                第二页
                            </div>
                        )
                    },
                    {
                        tabButton: "Options",
                        tabContent: (
                            <div>
                                第三页
                            </div>
                        )
                    }
                ]}
            />
        )
    }
}
export default NavPillsExample
