import React, { useState } from "react";

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
        //zmienna szerokość ekranu
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

const header = (props, setMapState, mapState) => {
    // const [selectState, setSelectState] = useState({
    //     selectedOption1: null,
    //     selectedOption2: null,
    // });

    const handleOption1Change = (selectedOption1) => {
        setMapState({ selectedOption1 });
        return selectedOption1;
    };

    const handleOption2Change = (selectedOption2) => {
        setMapState({ selectedOption2 });
        return selectedOption2;
    };

    const handleSubmit = () => {
        if (typeof props.clickMethod === "function") {
            props.clickMethod(mapState.selectedOption1, mapState.selectedOption2);
        }
    };

    return (
        <header>
            <div className="section_select">
                <Select
                    value={mapState.selectedOption1}
                    options={options1}
                    onChange={handleOption1Change}
                    placeholder={"wybierz dzielnicę..."}
                    styles={customStyles}
                ></Select>
                <Select
                    value={mapState.selectedOption2}
                    options={options2}
                    onChange={handleOption2Change}
                    placeholder={"wybierz usługę..."}
                    styles={customStyles}
                ></Select>
                <IconContext.Provider value={{ size: "2rem" }}>
                    <button onClick={handleSubmit}>
                        <FcCheckmark></FcCheckmark>
                    </button>
                </IconContext.Provider>
            </div>

            <button className="button_form">dodaj miejsce</button>
        </header>
    );
};

export default header;
