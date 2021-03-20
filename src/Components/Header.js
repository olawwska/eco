import React from "react";

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

export default class Header extends React.Component {
    state = {
        selectedOption1: null,
        selectedOption2: null,
    };

    handleOption1Change = (selectedOption1) => {
        this.setState({ selectedOption1 });
        return selectedOption1;
    };

    handleOption2Change = (selectedOption2) => {
        this.setState({ selectedOption2 });
        return selectedOption2;
    };

    handleSubmit = () => {
        if (typeof this.props.clickMethod === "function") {
            this.props.clickMethod(this.state.selectedOption1, this.state.selectedOption2);
        }
    };

    render() {
        const { selectedOption1 } = this.state;
        const { selectedOption2 } = this.state;

        return (
            <StyledHeader>
                <SectionSelect>
                    <Select
                        value={selectedOption1}
                        options={options1}
                        onChange={this.handleOption1Change}
                        placeholder={"wybierz dzielnicę..."}
                        styles={customStyles}
                    ></Select>
                    <Select
                        value={selectedOption2}
                        options={options2}
                        onChange={this.handleOption2Change}
                        placeholder={"wybierz usługę..."}
                        styles={customStyles}
                    ></Select>
                    <IconContext.Provider value={{ size: "2rem" }}>
                        <StyledButton onClick={this.handleSubmit}>
                            <FcCheckmark></FcCheckmark>
                        </StyledButton>
                    </IconContext.Provider>
                </SectionSelect>
                <FormButton className="button_form">dodaj miejsce</FormButton>
            </StyledHeader>
        );
    }
}
