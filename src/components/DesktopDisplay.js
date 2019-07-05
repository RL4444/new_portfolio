import React from "react";
import CarouselComp from "./CarouselComp";

// Integrate SQL backend with this so the code is more readable and clear
const DesktopDisplay = () => {
    const styles = {
        carouselContainer: {
            width: "90%",
            marginLeft: "5%",
            borderTop: "1px solid white",
            paddingTop: "5vh",
            paddingBottom: "5vh"
        },
        carouselHeadline: {
            color: "orange",
            marginBottom: "5vh",
            marginLeft: "1vw",
            fontSize: "2em"
        },
        imageContainer: {
            width: "30vw"
        },
        imageSize: {
            maxHeight: "23vh",
            width: "24vh",
            marginLeft: "15vw"
        }
    };
    return (
        <div>
            <CarouselComp
                styles={styles}
                title="Recent Work"
                imagesArr={[
                    {
                        imageUrl: "./images/github.png",
                        imageText: "image text 1"
                    },
                    {
                        imageUrl: "./images/linkedin.png",
                        imageText: "image text 2"
                    },
                    {
                        imageUrl: "./images/mail.png",
                        imageText: "image text 3"
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
              "I have used the React library extensivley for almost a year now and still love it."
                    },
                    {
                        imageUrl: "./images/tech/nodejs.png",
                        imageText:
              "Having worked at a professional level with Node.js on a dailt basis, I am more than familiar with its functionality."
                    },
                    {
                        imageUrl: "./images/tech/javascript.png",
                        imageText:
              "the bread and butter of my learning as a developer - I live and breath all things JavaScript. Pity about the name containing Java, but a wonderful language nonetheless."
                    },
                    {
                        imageUrl: "./images/tech/sql.png",
                        imageText:
              "For complex data storage I find SQL to be the best solution. PostgreSQL is something I have used at a professional level and feel very comfortable in."
                    },
                    {
                        imageUrl: "./images/tech/javascript.png",
                        imageText:
              "the bread and butter of my learning as a developer - I live and breath all things JavaScript. Pity about the name containing Java, but a wonderful language nonetheless."
                    },
                    {
                        imageUrl: "./images/tech/javascript.png",
                        imageText:
              "the bread and butter of my learning as a developer - I live and breath all things JavaScript. Pity about the name containing Java, but a wonderful language nonetheless."
                    }
                ]}
            />
            <CarouselComp styles={styles} />
        </div>
    );
};
export default DesktopDisplay;
