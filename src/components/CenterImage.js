import React from "react";
import Radium from "radium";

const CenterImage = () => {
    const centerImageStyle = {
        borderRadius: "50%",
        maxWidth: "200px",
        maxHeight: "200px",
        margin: "0 auto",
        objectFit: "contain",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    };
    return (
        <div style={centerImageStyle} className="centerImage">
            <img src="./images/rory_compressed_photo.jpg" />
        </div>
    );
};

export default Radium(CenterImage);
