import React, {useState} from "react";
import Box from "./Box";
import {v4 as uuid} from "uuid";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    const [boxes, setBoxes] = useState([{id: uuid(), color: "orange", height: "500px", width: "500px"}, {id: uuid(), color: "red", height: "200px", width: "100px"}])

    const addBox = ({color, height, width}) => {
        setBoxes([...boxes, {color, height, width, id: uuid()}])
    }

    const handleRemove = (boxId) => {
        setBoxes(boxes.filter(box => {
            if (box.id !== boxId) {
                return true;
            }
        }))
    }
    
    return (
        <div>
            {
                boxes.map(({color, height, width, id}) => {
                    return (
                        <Box id={id} color={color} height={height} width={width} handleRemove={handleRemove}/>
                    )
                })
            }
            <NewBoxForm addBox={addBox}/>
        </div>
    )
}

export default BoxList;