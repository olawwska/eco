import React from "react";
import { Container } from "./Components/Container";

import GoogleApiComponent from "./Google-based Component/GoogleApiComponent";

const MyMap = GoogleApiComponent({
    apiKey: "AIzaSyBbllFbOfzQ-i6NZniU8LuJq4LGAR6RwNs",
})(Container);

function App() {
    return <MyMap />;
}

export default App;
