import React from "react";
import Radium from "radium";

const Button = props => {
    let centered;
    if (props.centered) {
        centered = "0 auto";
    } else {
        centered = "0";
    }

    const styles = {
        buttonStyling: {
            borderRadius: "2px",
            padding: "12px 35px ",
            border: "1px solid orange",
            color: "orange",
            ":hover": {
                color: "black",
                backgroundColor: "orange",
                cursor: "pointer"
            }
        },
        buttonContainer: {
            width: "100px",
            margin: centered
        },
        outer: {
            height: "20vh",
            marginTop: "13%"
        }
    };
    return (
        <div style={styles.outer}>
            <div onClick={props.scrollBottom} style={styles.buttonContainer}>
                <a
                    key="1"
                    style={styles.buttonStyling}
                    href={props.buttonHref}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {props.buttonDisplayText}
                </a>
            </div>
        </div>
    );
};

export default Radium(Button);
