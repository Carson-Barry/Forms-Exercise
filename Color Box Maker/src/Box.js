import React from "react";
import "./Box.css";

const Box = ({color, height, width, id, handleRemove}) => {
    return (
        <div className="Box-container">
            <div className="Box" id={id} style={{
                height,
                width,
                backgroundColor: color,
            }}></div>
            <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )
}

export default Box;