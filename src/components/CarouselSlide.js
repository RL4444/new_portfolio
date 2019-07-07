import React from "react";
import Button from "./Button";

const CarouselSlide = props => {
    const styles = {
        rowFlex: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "white"
        },
        textStyle: {
            display: "flex",
            flexDirection: "column",
            textAlgin: "left",
            paddingLeft: "5vw",
            width: "60%",
            height: "90%",
            fontSize: "0.7em"
        }
    };
    let buttonAvailable = null;
    if (props.buttonDisplayText) {
        buttonAvailable = (
            <Button
                buttonDisplayText={props.buttonDisplayText}
                buttonHref={props.buttonHref}
            />
        );
    }
    return (
        <div>
            <div style={styles.rowFlex}>
                <div style={props.styles.imageContainer}>
                    <img style={props.styles.imageSize} src={props.slideImageUrl} />
                </div>
                <div style={styles.textStyle}>
                    <p>{props.slideText}</p>
                    {buttonAvailable}
                </div>
            </div>
        </div>
    );
};
export default CarouselSlide;
