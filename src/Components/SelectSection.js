import React from "react";
import Select from "react-select";

import "../Components/SelectSection.css";

const options = [
    { value: "Śródmieście", label: "Śródmieście" },
    { value: "Praga-Północ", label: "Praga-Północ" },
    { value: "Mokotów", label: "Mokotów" },
    { value: "Wola", label: "Wola" },
];

const options2 = [
    { value: "vege food", label: "vege food" },
    { value: "eco beauty", label: "eco beauty" },
    { value: "eco friendly", label: "eco friendly" },
];

const SectionSelect = () => (
    <div className="select__wrapper">
        <Select options={options}></Select>
        <Select options={options2}></Select>
    </div>
);

export default SectionSelect;
