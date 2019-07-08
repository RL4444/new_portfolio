import React from "react";
import Radium from "radium";

const SocialButtons = () => {
    const socialButtonsContainer = {
        marginTop: "15vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
        marginLeft: "20%"
    };
    const iconStyle = {
        height: "5vh",
        objectFit: "cover"
    };
    const buttomImgStyle = {
        height: "7vh",
        ":hover": {
            backgroundColor: "#ff7b00c0",
            border: "2px solid tomato",
            cursor: "pointer"
        }
    };
    return (
        <div style={socialButtonsContainer}>
            <div style={iconStyle}>
                <a
                    href="https://github.com/rl4444"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img style={buttomImgStyle} key="1" src="./images/github.png" />
                </a>
            </div>
            <div style={iconStyle}>
                <a
                    href="https://linkedin.com/in/rory-l-4310b518a"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img style={buttomImgStyle} key="2" src="./images/linkedin.png" />
                </a>
            </div>
            <div style={iconStyle}>
                <a href="mailto:lewisroryjames@gmail.com">
                    <img style={buttomImgStyle} key="3" src="./images/mail.png" />
                </a>
            </div>
        </div>
    );
};

export default Radium(SocialButtons);
