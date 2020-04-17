import React from "react";
import Radium from "radium";

const NavBar = () => {
    const styles = {
        navContainer: {
            zIndex: "1000",
            position: "fixed",
            height: "7vh",
            width: "100%",
            backgroundColor: "#161313a4",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        socialButtonContainer: {
            marginLeft: "1vw",
            width: "20vw",
            height: "7vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        eachButton: {
            objectFit: "cover",
            maxHeight: "5vh"
        },
        eachLink: {
            paddingTop: "1vh",
            width: "4vw",
            ":hover": {
                backgroundColor: "tomato",
                color: "black",
                cursor: "pointer",
                transitionDuration: "0.5"
            }
        },
        listSyles: {
            marginLeft: "40vw",
            width: "45vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        eachListItem: {
            paddingTop: "2.5vh",
            width: "15vw",
            ":hover": {
                backgroundColor: "tomato",
                color: "black",
                cursor: "pointer",
                transitionDuration: "0.5"
            }
        },
        eachATagItem: {
            ":hover": {
                color: "black"
            }
        }
    };
    return (
        <div style={styles.navContainer}>
            <div style={styles.socialButtonContainer}>
                <a
                    style={styles.eachLink}
                    href="https://github.com/rl4444"
                    rel="noopener noreferrer"
                    target="_blank"
                    key="4"
                >
                    <img style={styles.eachButton} key="7" src="./images/github.png" />
                </a>
                <a
                    style={styles.eachLink}
                    href="https://linkedin.com/in/rory-l-4310b518a"
                    rel="noopener noreferrer"
                    target="_blank"
                    key="5"
                >
                    <img style={styles.eachButton} key="8" src="./images/linkedin.png" />
                </a>
                <a
                    style={styles.eachLink}
                    href="mailto:lewisroryjames@gmail.com"
                    key="6"
                >
                    <img style={styles.eachButton} key="9" src="./images/mail.png" />
                </a>
            </div>
            <ul style={styles.listSyles}>
                <a
                    key="10"
                    style={styles.eachListItem}
                    href="https://github.com/rl4444"
                    rel="noopener noreferrer"
                    target="_blank"
                >
          WORK SAMPLES
                </a>
                <a
                    key="11"
                    style={styles.eachListItem}
                    href="./cv/rory_lewis_cv_2020_v1.pdf"
                    download="rory_lewis_cv_2020_v1.pdf"
                >
          DOWNLOAD CV
                </a>
                <a
                    style={styles.eachListItem}
                    key="12"
                    href="mailto:lewisroryjames@gmail.com"
                >
          CONTACT
                </a>
            </ul>
        </div>
    );
};

export default Radium(NavBar);
