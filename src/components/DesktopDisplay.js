import React from 'react';
import CarouselComp from './CarouselComp';
import Radium from 'radium';

// Integrate nedb backend with this so the code is more readable
const DesktopDisplay = () => {
    const styles = {
        carouselContainer: {
            width: '90%',
            height: '40vh',
            marginLeft: '5%',
            borderTop: '1px solid white',
            paddingTop: '5vh',
            paddingBottom: '5vh',
            marginBottom: '3vh',
        },
        carouselHeadline: {
            color: 'tomato',
            marginBottom: '5vh',
            marginLeft: '1vw',
            fontSize: '2em',
        },
        imageContainer: {
            width: '30vw',
        },
        imageSize: {
            maxHeight: '23vh',
            width: '24vh',
            marginLeft: '15vw',
        },
        desktopContainer: {
            '@media (max-height: 720px) and (min-width: 800px)': {
                marginTop: '30vh',
            },
        },
    };
    return (
        <div style={styles.desktopContainer}>
            <CarouselComp
                styles={styles}
                title='Recent Work'
                imagesArr={[
                    {
                        imageUrl: './images/hive_one.png',
                        imageText:
                            'I have worked with Hive.one since August 2019 as a Frontend Developer, using React and all the latest best practices and libraries in web development.',
                        buttonDisplayText: 'WEBSITE',
                        buttonHref: 'https://hive.one',
                    },
                    {
                        imageUrl: './images/cinuru.png',
                        imageText:
                            "Recently I have worked for Cinuru as a software developer. Their app is focused on connecting cinemas, users and user's favourite movies.",
                        buttonDisplayText: 'WEBSITE',
                        buttonHref: 'https://cinuru.com',
                    },
                    {
                        imageUrl: './images/twist.jpg',
                        imageText: 'Open Sourced Twist bot for counting positive messages sent between channel users',
                        buttonDisplayText: 'GITHUB',
                        buttonHref: 'https://github.com/RL4444/twist_bot',
                    },
                    {
                        imageUrl: './images/youtube.png',
                        imageText: 'YouTube video seach engine powered by their YT api v3 and Material UI frontend',
                        buttonDisplayText: 'GITHUB',
                        buttonHref: 'https://github.com/RL4444/youtube-api-search-engine',
                    },
                    {
                        imageUrl: './images/ulfs_cafe_homepage.PNG',
                        imageText: "In this project I worked as frontend developer, redesigning the cafe's website",
                        buttonDisplayText: 'WEBSITE',
                        buttonHref: 'https://ulfscafe.de',
                    },
                    {
                        imageUrl: './images/matchit.png',
                        imageText:
                            'Full scale project that allows users to search if nearby Pubs are showing a football game they like',
                        buttonDisplayText: 'HEROKU',
                        buttonHref: 'https://match-it-football.herokuapp.com/#/',
                    },
                ]}
            />
            <CarouselComp
                styles={styles}
                title='Tech Stack'
                imagesArr={[
                    {
                        imageUrl: './images/tech/react.png',
                        imageText:
                            'I have used the React library extensively for more than two years now and consider it the best tool for website development.',
                    },
                    {
                        imageUrl: './images/tech/styled_components.png',
                        imageText:
                            'During my time at Hive I removed SASS from our styling and integrated Styled Components through the project.',
                    },
                    {
                        imageUrl: './images/tech/graphql.png',
                        imageText:
                            'I have used Graph QL at a professional level and consider it a powerful tool for efficient backend',
                    },
                    {
                        imageUrl: './images/tech/nodejs.png',
                        imageText:
                            'Having worked at a professional level with Node.js on a daily basis, I am more than familiar with its functionality.',
                    },
                    {
                        imageUrl: './images/tech/javascript.png',
                        imageText: 'Proficient in ES6/7 and Vanilla JS.',
                    },
                    {
                        imageUrl: './images/tech/sql.png',
                        imageText:
                            'For complex data storage I find SQL to be the best solution. PostgreSQL is something I have used at a professional level and feel very comfortable in.',
                    },
                    {
                        imageUrl: './images/tech/css.png',
                        imageText: 'I have used CSS for more than a year and I am very comfortable with it.',
                    },
                    {
                        imageUrl: './images/tech/serverless.png',
                        imageText:
                            'Serverless is a tool that I have some experience in from my time as Cinuru, and feel comfortable in setting up its configuration.',
                    },
                    {
                        imageUrl: './images/tech/jest.png',
                        imageText:
                            'During my time at Cinuru GmbH I used wrote tests for backend API testing through Jest.js.',
                    },
                    {
                        imageUrl: './images/tech/google.png',
                        imageText:
                            "I am comfortable with google's API service and have experience in using the YouTube V3 API engine.",
                    },
                ]}
            />
        </div>
    );
};
export default Radium(DesktopDisplay);
