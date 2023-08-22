import React from "react";

const Box = ({color, height, width}) => {
    return (
        <div style={{
            height: {height},
            width: {width},
            backgroundColor: {color}
        }}>
        </div>
    )
}

export default Box;