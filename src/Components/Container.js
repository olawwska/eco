import React from "react";

import { Map } from "./Map";
import SectionSelect from "./Select";

export class Container extends React.Component {
    render() {
        const style = {
            width: "100vw",
            height: "100vh",
        };

        if (!this.props.loaded) {
            return <div>loading ...</div>;
        }

        return (
            <div style={style}>
                <SectionSelect />
                <Map google={this.props.google} />
            </div>
        );
    }
}
