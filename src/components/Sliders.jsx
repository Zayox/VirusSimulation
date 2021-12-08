import React from 'react';
import "../css/slider.css";
import "../js/slider.js";

const Sliders = () => {
    return (
        <div className="slidecontainer">
            <p>Add a person:</p>
            <input type="range" min="1" max="100" value="50" />

                <p>Add an infected person:</p>
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                    <p>Value: <span id="demo"></span></p>
        </div>
    );
};

export default Sliders;
