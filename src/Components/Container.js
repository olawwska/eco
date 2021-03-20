import React, { useState } from "react";

import { Map, Marker } from "google-maps-react";

import firebase from "../firebase";

import header from "./Header";

export default container = () => {
    const [mapState, setMapState] = useState({
        Vegan: [],
        GlutenFree: [],
        passedSelectedOption2: {},
        passedSelectedOption1: {},
        selectedOption1: null,
        selectedOption2: null,
    });

    useEffect(() => {
        const itemsRef = firebase.database().ref("Vegan");
        itemsRef.on("value", (snapshot) => {
            let vegans = snapshot.val();
            return vegans;
        });
        const itemsRef2 = firebase.database().ref("Glutenfree");
        itemsRef2.on("value", (snapshot) => {
            let glutenfrees = snapshot.val();
            return glutenfrees;
        });
        setMapState({
            Vegan: vegans,
            GlutenFree: glutenfrees,
        });
    }, []);

    const handleClickButton = (paramFromChild1, paramFromChild2) => {
        setMapState({
            passedSelectedOption1: paramFromChild1,
            passedSelectedOption2: paramFromChild2,
        });

        const handleMarkerCreate = (places) => {
            return Object.values(places)
                .filter((place) => {
                    return (
                        mapState.passedSelectedOption1.value === place.locality &&
                        mapState.passedSelectedOption2.value === place.type
                    );
                })
                .map((place) => {
                    return (
                        <Marker
                            key={place.name}
                            position={{ lat: place.latitude, lng: place.longitude }}
                        />
                    );
                });
        };

        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <header clickMethod={handleClickButton}></header>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{ lat: 52.229676, lng: 21.012229 }}
                >
                    {handleMarkerCreate(mapState.Vegan)}
                    {handleMarkerCreate(mapState.GlutenFree)}
                </Map>
            </div>
        );
    };
};
