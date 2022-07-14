import React from "react";

/** Renders a single box from user inputs.
 * 
 *  Props:
 *      - backgroundColor
 *      - width
 *      - height
 * 
 *  BoxList -> Box
 */

// TODO: make sure input from form gets changed from string to Num
function Box({ backgroundColor, width, height }) {
    let boxStyle = {
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
    }
    return (
        <div style={boxStyle}></div>
    )
}

export default Box;