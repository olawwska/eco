import React from "react";
import Select from "react-select";

import "../Components/Select.css";

const options = [
    { value: "Śródmieście", label: "Śródmieście" },
    { value: "Praga-Północ", label: "Praga-Północ" },
    { value: "Mokotów", label: "Mokotów" },
];

const options2 = [
    { value: "vege szama", label: "vege szama" },
    { value: "vege beauty", label: "vege beauty" },
    { value: "eco friendly", label: "eco friendly" },
];

const SectionSelect = () => (
    <div className="select__wrapper">
        <Select options={options}></Select>;<Select options={options2}></Select>;
    </div>
);

export default SectionSelect;
