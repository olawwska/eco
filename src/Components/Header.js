import React, { useState } from "react";

import Select from "react-select";

import styled from "styled-components";

import { FcCheckmark } from "react-icons/fc";
import { IconContext } from "react-icons";

const options1 = [
    { value: "Śródmieście Południowe", label: "Śródmieście Południowe" },
    { value: "Śródmieście Północne", label: "Śródmieście Północne" },
    { value: "Ochota", label: "Ochota" },
];
const options2 = [
    { value: "Vegan", label: "Vegan" },
    { value: "Glutenfree", label: "Glutenfree" },
];

const selectContainerWidth = "50%";

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: selectContainerWidth,
    }),
    control: (provided) => ({
        ...provided,
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: "40px",
        minHeight: "40px",
        overflow: "none",
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
    }),
};

const StyledHeader = styled.header`
    width: 100%;
    height: 17%;
    padding: 3.5rem 12.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0.75rem 2rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 3.5rem 3rem;
    }
`;

const SectionSelect = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const StyledButton = styled.button`
    width: 10%;
    height: 40px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    color: hsl(0, 0%, 50%);
    margin: 0px 2px;
`;

const FormButton = styled.button`
    width: 200px;
    height: 40px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    color: hsl(0, 0%, 50%);
    margin: 0px 2px;
    float: right;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
    @media (max-width: 768px) {
        position: absolute;
        right: 2rem;
        width: 25%;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        position: absolute;
        right: 3rem;
        width: 20%;
    }
`;

const Header = (props) => {
    const [selected1State, setSelected1State] = useState({
        selectedOption1: null,
    });

    const [selected2State, setSelected2State] = useState({
        selectedOption2: null,
    });

    const handleOption1Change = (selectedOption1) => {
        setSelected1State({ selectedOption1 });
        return selectedOption1;
    };

    const handleOption2Change = (selectedOption2) => {
        setSelected2State({ selectedOption2 });
        return selectedOption2;
    };

    const handleSubmit = () => {
        if (typeof props.clickMethod === "function") {
            props.clickMethod(selected1State.selectedOption1, selected2State.selectedOption2);
        }
    };

    return (
        <StyledHeader>
            <SectionSelect>
                <Select
                    value={selected1State.selectedOption1}
                    options={options1}
                    onChange={handleOption1Change}
                    placeholder={"wybierz dzielnicę..."}
                    styles={customStyles}
                ></Select>
                <Select
                    value={selected2State.selectedOption2}
                    options={options2}
                    onChange={handleOption2Change}
                    placeholder={"wybierz usługę..."}
                    styles={customStyles}
                ></Select>
                <IconContext.Provider value={{ size: "2rem" }}>
                    <StyledButton onClick={handleSubmit}>
                        <FcCheckmark></FcCheckmark>
                    </StyledButton>
                </IconContext.Provider>
            </SectionSelect>
            <FormButton className="button_form">dodaj miejsce</FormButton>
        </StyledHeader>
    );
};

export default Header;
