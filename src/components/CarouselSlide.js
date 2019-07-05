import React from "react";

const CarouselSlide = props => {
    const styles = {
        imageSize: {
            maxHeight: "23vh",
            width: "24vh",
            marginLeft: "15vw"
        },
        rowFlex: {
            display: "flex",
            flexDirection: "row",
            width: "80vh",
            justifyContent: "space-around",
            color: "white"
        }
    };
    return (
        <div style={styles.rowFlex}>
            <img style={styles.imageSize} src={props.slideImageUrl} />
            <h4>{props.slideText}</h4>
        </div>
    );
};
export default CarouselSlide;
