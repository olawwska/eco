import React, { useState, useEffect } from "react";

import { Map, Marker, InfoWindow } from "google-maps-react";

import firebase from "../firebase";

import Header from "./Header";

const Container = (props) => {
    const [mapVeganState, setMapVeganState] = useState({
        Vegan: [],
    });

    const [mapGlutenfreeState, setMapGlutenfreeState] = useState({
        GlutenFree: [],
    });

    const [headerSelectState, setHeaderSelectState] = useState({
        passedSelectedOption1: "",
        passedSelectedOption2: "",
    });

    const [infoWindowState, setInfoWindowState] = useState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: null,
    });

    const onMarkerClick = (props, marker) => {
        setInfoWindowState({
            showingInfoWindow: true,
            activeMarker: marker,
            selectedPlace: props,
        });
    };

    const onMapClick = () => {
        if (setInfoWindowState.showingInfoWindow) {
            setInfoWindowState({
                showingInfoWindow: false,
                activeMarker: null,
                selectedPlace: null,
            });
        }
    };

    useEffect(() => {
        const itemsRef = firebase.database().ref("Vegan");
        itemsRef.on("value", (snapshot) => {
            let vegans = snapshot.val();
            setMapVeganState({
                Vegan: vegans,
            });
        });
        const itemsRef2 = firebase.database().ref("Glutenfree");
        itemsRef2.on("value", (snapshot) => {
            let glutenfrees = snapshot.val();
            setMapGlutenfreeState({
                GlutenFree: glutenfrees,
            });
        });
    }, []);

    const handleClickButton = (paramFromChild1, paramFromChild2) => {
        if(!paramFromChild1 || !paramFromChild2){
            alert('Please select options first');
        } else {
            setHeaderSelectState({
                passedSelectedOption1: paramFromChild1,
                passedSelectedOption2: paramFromChild2,
            });
        }
    };

    const handleMarkerCreate = (places) => {
        return Object.values(places)
            .filter((place) => {
                return (
                    headerSelectState.passedSelectedOption1.value === place.locality &&
                    headerSelectState.passedSelectedOption2.value === place.type
                );
            })
            .map((place) => {
                return (
                    <Marker
                        key={place.name}
                        position={{ lat: place.latitude, lng: place.longitude }}
                        initialCenter={{ lat: 52.229676, lng: 21.012229 }}
                        onClick={onMarkerClick}

                    />
                );
            });
    };

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header clickMethod={handleClickButton}></Header>
            <Map
                style={{
                    width: "70%",
                    height: "70%",
                    margin: "0 auto",
                    border: " 10px solid hsl(0, 0%, 80%)",
                }}
                google={props.google}
                zoom={14}
                initialCenter={{ lat: 52.229676, lng: 21.012229 }}
                onClick={onMapClick}
            >
                {handleMarkerCreate(mapVeganState.Vegan)}
                {handleMarkerCreate(mapGlutenfreeState.GlutenFree)}
                <InfoWindow
                    marker={infoWindowState.activeMarker}
                    visible={infoWindowState.showingInfoWindow}
                >
                    {/* {infoWindowState.showingInfoWindow === true ? ( */}
                    <div>
                        {/* <h1>{infoWindowState.selectedPlace.restaurant.name}</h1>
                            <h3>{infoWindowState.selectedPlace.restaurant.type}</h3>
                            <h3>{infoWindowState.selectedPlace.restaurant.locality}</h3>
                            <h3>{infoWindowState.selectedPlace.restaurant.address}</h3>
                            <h3>{infoWindowState.selectedPlace.restaurant.url}</h3> */}
                    </div>
                    {/* ) : null} */}
                </InfoWindow>
            </Map>
        </div>
    );
};

export default Container;
