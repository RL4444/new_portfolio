import React from "react";

const CarouselSlide = props => {
    const styles = {
        imageContainer: {
            width: "30vw"
        },
        imageSize: {
            maxHeight: "23vh",
            width: "24vh",
            marginLeft: "15vw"
        },
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
    return (
        <div style={styles.rowFlex}>
            <div style={styles.imageContainer}>
                <img style={styles.imageSize} src={props.slideImageUrl} />
            </div>
            <div style={styles.textStyle}>
                <h4>{props.slideText}</h4>
            </div>
        </div>
    );
};
export default CarouselSlide;
