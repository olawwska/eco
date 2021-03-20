import React from "react";

import styled from "styled-components";

const StyledInfoBox = styled.div`
    height: 100%;
    flex: 1.25;
    border: 1px solid gray;
    background-color: pink;
`;

export default class InfoBox extends React.Component {
    render() {
        return <StyledInfoBox></StyledInfoBox>;
    }
}
