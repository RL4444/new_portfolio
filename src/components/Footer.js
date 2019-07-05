import React from "react";

const Footer = () => {
    const styles = {
        footerContainer: {
            height: "15vh",
            zIndex: "1000",
            backgroundColor: "#161313a4",
            color: "white",
            display: "flex",
            flexDirection: "row",
            marginBottom: "0"
        },
        eachRow: {
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingLeft: "15vw",
            fontSize: "0.7em"
        }
    };
    return (
        <div style={styles.footerContainer}>
            <div style={styles.eachRow}>
                <p>contact: lewisroryjames@gmail.com</p>
            </div>
            <div style={styles.eachRow}>
                <p>created by Rory Lewis 2019</p>
            </div>
            <div style={styles.eachRow}>
                <p>FAQs</p>
            </div>
        </div>
    );
};

export default Footer;
