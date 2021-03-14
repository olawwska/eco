import React from "react";

import { Map } from "./Map";
import SectionSelect from "./SelectSection";
import { Marker } from "./Marker";

export class Container extends React.Component {
    render() {
        const style = {
            width: "100vw",
            height: "100vh",
        };

        if (!this.props.loaded) {
            return <div>loading ...</div>;
        }

        const pos = { lat: 52.229676, lng: 21.012229 };
        return (
            <div style={style}>
                <SectionSelect />
                <Map google={this.props.google}>
                    <Marker />
                    <Marker position={pos} />
                </Map>
            </div>
        );
    }
}
