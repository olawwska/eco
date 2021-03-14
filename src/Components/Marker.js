import React from "react";
import PropTypes from "prop-types";

export class Marker extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
            this.renderMarker();
            //the relevant props for this marker has changed
        }
    }

    componentDidMount() {
        this.renderMarker();
    }

    renderMarker() {
        let { map, google, position, mapCenter } = this.props;
        console.log(map + " sksks");
        let pos = position || mapCenter;

        position = new google.maps.LatLng(pos.lat, pos.lng);

        const pref = {
            map: map,
            position: position,
        };

        this.marker = new google.maps.Marker(pref);
    }
    render() {
        return null;
    }
}

Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object,
};
