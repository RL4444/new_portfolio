import React from "react";
import Radium from "radium";

const SocialButtons = () => {
    const socialButtonsContainer = {
        marginTop: "5%",
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
            border: "2px solid orange",
            cursor: "pointer"
        }
    };
    return (
        <div style={socialButtonsContainer}>
            <div style={iconStyle}>
                <a>
                    <img style={buttomImgStyle} key="1" src="./images/github.png" />
                </a>
            </div>
            <div style={iconStyle}>
                <a>
                    <img style={buttomImgStyle} key="2" src="./images/linkedin.png" />
                </a>
            </div>
            <div style={iconStyle}>
                <a>
                    <img style={buttomImgStyle} key="3" src="./images/mail.png" />
                </a>
            </div>
        </div>
    );
};

export default Radium(SocialButtons);
