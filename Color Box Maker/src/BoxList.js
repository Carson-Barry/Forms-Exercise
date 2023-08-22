import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    const [boxes, setBoxes] = useState([{color: "orange", height: "500px", width: "500px"}, {color: "red", height: "200px", width: "100px"}])

    const addBox = (box) => {
        setBoxes([...boxes, box])
    }
    
    return (
        <div>
            {
                boxes.map(({color, height, width}) => {
                    return <Box color={color} height={height} width={width}/>
                })
            }
        </div>
    )
}

export default BoxList;