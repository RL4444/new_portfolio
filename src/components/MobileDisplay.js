import React from "react";
import Radium from "radium";
import CarouselComp from "./CarouselComp";
import Button from "./Button";

const MobileDisplay = props => {
    const styles = {
        carouselContainer: {
            height: "40vh",
            display: "block",
            position: "relative",
            width: "90%",
            marginLeft: "5%",
            borderTop: "1px solid white",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            "@media (orientation: landscape) ": {
                height: "60vh"
            }
        },
        carouselHeadline: {
            color: "tomato",
            marginBottom: "5vh",
            marginLeft: "1vw",
            fontSize: "2em"
        },
        imageContainer: {
            width: "10vw"
        },
        imageSize: {
            maxHeight: "10vh",
            width: "10vh",
            marginLeft: "5vw"
        },
        mobileContainer: {
            marginTop: "35vh",
            "@media (max-height: 570px)": {
                marginTop: "65vh"
            }
        },
        moreButton: {
            marginBottom: "10vh",
            textAlign: "center"
        }
    };
    return (
        <div>
            <div style={styles.mobileContainer}>
                <Button
                    centered={true}
                    scrollBottom={props.scrollBottom}
                    buttonDisplayText={"MORE"}
                />
                <CarouselComp
                    styles={styles}
                    title="Recent Work"
                    imagesArr={[
                        {
                            imageUrl: "./images/cinuru.png",
                            imageText:
                "Recently I have worked for Cinuru as a software developer. Their app is focused on connecting cinemas, users and user's favourite movies.",
                            buttonDisplayText: "WEBSITE",
                            buttonHref: "https://cinuru.com"
                        },
                        {
                            imageUrl: "./images/github.png",
                            imageText:
                "Open Sourced Twist bot for counting positive messages sent between channel users",
                            buttonDisplayText: "GITHUB",
                            buttonHref: "https://github.com/rl4444"
                        },
                        {
                            imageUrl: "./images/youtube.png",
                            imageText:
                "YouTube video seach engine powered by their YT api v3 and Material UI frontend",
                            buttonDisplayText: "GITHUB",
                            buttonHref: "https://github.com/rl4444"
                        },
                        {
                            imageUrl: "./images/ulfs_cafe_homepage.PNG",
                            imageText:
                "In this project I worked as frontend developer, redesigning the cafe's website",
                            buttonDisplayText: "WEBSITE",
                            buttonHref: "https://ulfscafe.de"
                        },
                        {
                            imageUrl: "./images/matchit.png",
                            imageText:
                "Full scale project that allows users to search if nearby Pubs are showing a football game they like",
                            buttonDisplayText: "HEROKU",
                            buttonHref: "https://github.com/rl4444"
                        }
                    ]}
                />

                <CarouselComp
                    styles={styles}
                    title="Tech Stack"
                    imagesArr={[
                        {
                            imageUrl: "./images/tech/react.png",
                            imageText:
                "I have used the React library extensively for almost a year now and consider it the best tool for website development."
                        },
                        {
                            imageUrl: "./images/tech/graphql.png",
                            imageText:
                "I have used Graph QL at a professional level and consider it a powerful tool for efficient backend"
                        },
                        {
                            imageUrl: "./images/tech/nodejs.png",
                            imageText:
                "Having worked at a professional level with Node.js on a daily basis, I am more than familiar with its functionality."
                        },
                        {
                            imageUrl: "./images/tech/javascript.png",
                            imageText: "Proficient in ES6/7 and Vanilla JS."
                        },
                        {
                            imageUrl: "./images/tech/sql.png",
                            imageText:
                "For complex data storage I find SQL to be the best solution. PostgreSQL is something I have used at a professional level and feel very comfortable in."
                        },
                        {
                            imageUrl: "./images/tech/css.png",
                            imageText:
                "I have used CSS for more than a year and I am very comfortable with it."
                        },
                        {
                            imageUrl: "./images/tech/serverless.png",
                            imageText:
                "Serverless is a tool that I have some experience in from my time as Cinuru, and feel comfortable in setting up its configuration."
                        },
                        {
                            imageUrl: "./images/tech/jest.png",
                            imageText:
                "During my time at Cinuru GmbH I used wrote tests for backend API testing through Jest.js."
                        },
                        {
                            imageUrl: "./images/tech/aws.png",
                            imageText:
                "I have used Amazons Lambda services at a production level for monitoring backend check scripts."
                        },
                        {
                            imageUrl: "./images/tech/google.png",
                            imageText:
                "I am also comfortable with google's API service and have experience in using the YouTube V3 API engine."
                        }
                    ]}
                />
            </div>
        </div>
    );
};
export default Radium(MobileDisplay);
