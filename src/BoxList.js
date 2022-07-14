import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

// place state for all boxes here
// render all box components
/** Box list: manages all boxes in the list
 * 
 *  State:
 *  - boxes: array [ { backgroundColor, width, height }, ... ]
 * 
 *  App -> BoxList -> NewBoxForm, Box
 */

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function renderBoxes() {
        return (
            <div>
                {boxes.map(box => <Box val={box}/>)}
            </div>
        )
    }

    function submitBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm submitBox={submitBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;