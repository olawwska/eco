import React from "react";

import Select from "react-select";

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
        width: 400,
    }),
    option: (provided) => ({
        ...provided,
        width: 400,
    }),
    menu: (provided) => ({
        ...provided,
        width: 400,
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
                <button
                    style={{ width: "200px", height: "40px" }}
                    onClick={this.handleSubmit}
                ></button>
                <button style={{ width: "200px", height: "40px" }}>Add place</button>
            </header>
        );
    }
}
