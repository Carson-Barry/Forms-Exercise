import React from "react";
import "./Box.css";

const Box = ({color = "green", height = "100px", width = "100px"}) => {
    return (
        <div className="Box" style={{
            height,
            width,
            backgroundColor: color,
        }}></div>
    )
}

export default Box;