import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class Map extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            //https://reactjs.org/docs/react-dom.html#finddomnode

            let { initialCenter, zoom } = this.props;
            const { lat, lng } = initialCenter;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom,
                }
            );
            this.map = new maps.Map(node, mapConfig);
        }
    }
    render() {
        const style = {
            width: "100vw",
            height: "100vh",
        };
        return (
            <div style={style} ref="map">
                Loading map...
            </div>
        );
    }
}

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
};

Map.defaultProps = {
    zoom: 12,
    //Warsaw by default
    initialCenter: {
        lat: 52.229676,
        lng: 21.012229,
    },
};
