import React from "react";
import Radium from "radium";

const NavBar = () => {
    const styles = {
        navContainer: {
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
                backgroundColor: "orange",
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
                backgroundColor: "orange",
                color: "black",
                cursor: "pointer",
                transitionDuration: "0.5"
            }
        }
    };
    return (
        <div style={styles.navContainer}>
            <div style={styles.socialButtonContainer}>
                <a style={styles.eachLink} key="4">
                    <img style={styles.eachButton} key="7" src="./images/github.png" />
                </a>
                <a style={styles.eachLink} key="5">
                    <img style={styles.eachButton} key="8" src="./images/linkedin.png" />
                </a>
                <a style={styles.eachLink} key="6">
                    <img style={styles.eachButton} key="9" src="./images/mail.png" />
                </a>
            </div>
            <ul style={styles.listSyles}>
                <li style={styles.eachListItem} key="1">
          WORK SAMPLES
                </li>
                <li style={styles.eachListItem} key="2">
          GAMES
                </li>
                <li style={styles.eachListItem} key="3">
          CONTACT
                </li>
            </ul>
        </div>
    );
};

export default Radium(NavBar);
