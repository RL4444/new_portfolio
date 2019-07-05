import React from "react";
import Radium from "radium";

const CenterImage = () => {
    const centerImageStyle = {
        borderRadius: "50%",
        maxWidth: "250px",
        maxHeight: "250px",
        objectFit: "cover",
        overflow: "hidden",
        marginLeft: "35%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "@media (min-width: 1000px)": {
            // border: "5px solid green",
            marginLeft: "40%"
        },
        "@media (max-width: 792px)": {
            // border: "5px solid green",
            marginLeft: "25%"
        }
    };
    console.log("center image ", centerImageStyle.marginLeft);
    return (
        <div style={centerImageStyle} className="centerImage">
            <img src="./images/rory_compressed_photo.jpg" />
        </div>
    );
};

export default Radium(CenterImage);
