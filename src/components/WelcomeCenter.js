import React from "react";
import SocialButtons from "./SocialButtons";
import CenterImage from "./CenterImage";
import Radium, { StyleRoot } from "radium";

const WelcomeCenter = props => {
    const headlineStyle = {
        margin: "0",
        color: "white",
        textAlign: "center",
        fontSize: "6em",
        "@media (max-width: 878px)": {
            fontSize: "3em"
        }
    };
    const headlineContainer = {
        marginTop: "20vh",
        "@media (min-width: 878px)": {
            marginTop: "12vh"
        }
    };
    const welcomeCenterContainer = {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginLeft: "10%",
        justifyContent: "space-around center"
    };
    const subHeadStyle = {
        color: "orange",
        fontSize: "5em",
        "@media (max-width: 878px)": {
            fontSize: "2em"
        }
    };
    const imageContainer = {
        marginTop: "2vh"
    };

    let aboutMeSyle = {
        height: "20vh",
        color: "white",
        transform: "translateY(0)",
        transitionDuration: "600",
        position: "inherit",
        textAlign: "center",
        fontSize: "1.5em",
        marginTop: "3vh"
    };
    const aboutMe = active => {
        console.log("does it get to here", active);
        if (active) {
            return (
                <div style={aboutMeSyle}>
                    <h5>blah blach about me </h5>
                </div>
            );
        } else {
            return null;
        }
    };
    let socialButtons = null;
    if (props.windowWidth < 878) {
        socialButtons = <SocialButtons />;
    }

    return (
        <StyleRoot>
            <div style={welcomeCenterContainer}>
                <div style={headlineContainer}>
                    <h2 style={headlineStyle}>RORY LEWIS</h2>
                </div>
                <div style={subHeadStyle}>
                    <h5>Full Stack Developer</h5>
                </div>
                <div onClick={props.toggleAboutMe} style={imageContainer}>
                    <CenterImage
                        windowHeight={props.windowHeight}
                        windowWidth={props.windowWidth}
                    />
                </div>
                {aboutMe(props.showAboutMe)}
                <div>{socialButtons}</div>
            </div>
        </StyleRoot>
    );
};

export default Radium(WelcomeCenter);
