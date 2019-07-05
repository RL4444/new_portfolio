import React from "react";

const CarouselSlide = props => {
    const styles = {
        rowFlex: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "white"
        },
        textStyle: {
            paddingLeft: "5vw",
            width: "60%"
        }
    };
    console.log("props in image slider ", props);
    return (
        <div style={styles.rowFlex}>
            <div style={props.styles.imageContainer}>
                <img style={props.styles.imageSize} src={props.slideImageUrl} />
            </div>
            <div style={styles.textStyle}>
                <h4>{props.slideText}</h4>
            </div>
        </div>
    );
};
export default CarouselSlide;
