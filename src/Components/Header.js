import React from "react";

import Select from "react-select";

import "../Components/Header.css";

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
const customStyles = {
    control: (provided) => ({
        ...provided,
        width: 350,
    }),
    option: (provided) => ({
        ...provided,
        width: 350,
    }),
    menu: (provided) => ({
        ...provided,
        width: 350,
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
            <header>
                <div className="section_select">
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
                        <button onClick={this.handleSubmit}>
                            <FcCheckmark></FcCheckmark>
                        </button>
                    </IconContext.Provider>
                </div>

                <button className="button_form">dodaj miejsce</button>
            </header>
        );
    }
}
