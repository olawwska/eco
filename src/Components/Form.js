import React from "react";

import "./Form.css";

class Form extends React.Component {
    render() {
        return (
            <div className="section-form">
                <form>
                    <p> NAZWA: </p>
                    <input></input>
                    <p> ADRES: </p>
                    <input></input>
                    <p> TYP: </p>
                    <input></input>
                    <p> DZIELNICA: </p>
                    <input></input>
                    <p> URL: </p>
                    <input></input>
                </form>
            </div>
        );
    }
}

export default Form;
