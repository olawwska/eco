import React, { Component } from "react";

import { Map, Marker } from "google-maps-react";

import firebase from "../firebase";

import Header from "./Header";

export class Container extends Component {
    state = {
        Vegan: [{ lat: 52.229676, lng: 21.012229 }],
        GlutenFree: [{ lat: 52.329676, lng: 21.412229 }],
        passedSelectedOption1: {},
        passedSelectedOption2: {},
    };

    componentDidMount() {
        const itemsRef = firebase.database().ref("Vegan");
        itemsRef.on("value", (snapshot) => {
            let vegans = snapshot.val();
            this.setState({
                Vegan: vegans,
            });
        });
        const itemsRef2 = firebase.database().ref("Glutenfree");
        itemsRef2.on("value", (snapshot) => {
            let glutenfrees = snapshot.val();
            this.setState({
                GlutenFree: glutenfrees,
            });
        });
    }

    handleClickButton = (paramFromChild1, paramFromChild2) => {
        this.setState({
            passedSelectedOption1: paramFromChild1,
            passedSelectedOption2: paramFromChild2,
        });
    };

    handleMarkerCreate = (places) => {
        return Object.values(places)
            .filter((place) => {
                return (
                    this.state.passedSelectedOption1.value === place.locality &&
                    this.state.passedSelectedOption2.value === place.type
                );
            })
            .map((place) => {
                return (
                    <Marker
                        onClick={this.onMarkerClick}
                        key={place.name}
                        restaurant={place}
                        position={{ lat: place.latitude, lng: place.longitude }}
                    />
                );
            });
    };

    render() {
        const style = {
            width: "100vw",
            height: "100vh",
        };

        if (!this.props.loaded) {
            return <div>Loading...</div>;
        }

        return (
            <div style={style}>
                <Header clickMethod={this.handleClickButton}></Header>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{ lat: 52.229676, lng: 21.012229 }}
                >
                    {this.handleMarkerCreate(this.state.Vegan)}
                    {this.handleMarkerCreate(this.state.GlutenFree)}
                </Map>
            </div>
        );
    }
}

// Map.propTypes = {
//     google: PropTypes.object,
//     zoom: PropTypes.number,
//     initialCenter: PropTypes.object,
// };

// Map.defaultProps = {
//     zoom: 12,
//     //Warsaw by default
//     initialCenter: {
//         lat: 52.229676,
//         lng: 21.012229,
//     },
// };
