import React from "react";

import { Container } from "./Components/Container";

import { GoogleApiWrapper } from "google-maps-react";

const MyApp = GoogleApiWrapper({
    apiKey: "AIzaSyBbllFbOfzQ-i6NZniU8LuJq4LGAR6RwNs",
})(Container);

const App = () => {
    return <MyApp />;
};

export default App;
