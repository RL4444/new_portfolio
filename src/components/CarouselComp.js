import React from "react";
import Carousel from "nuka-carousel";
import CarouselSlide from "./CarouselSlide";
import ReactLoading from "react-loading";

const CarouselComp = props => {
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
        }
    };

    const mapSlideComponentImages = dataProp => {
        if (dataProp) {
            return dataProp.map((item, index) => {
                return (
                    <CarouselSlide
                        slideImageUrl={item.imageUrl}
                        slideText={item.imageText}
                        key={index}
                    />
                );
            });
        } else {
            return (
                <ReactLoading
                    type={"spokes"}
                    color={"orange"}
                    height={300}
                    width={120}
                    className="loader"
                />
            );
        }
    };
    return (
        <div style={styles.carouselContainer}>
            <h3 style={styles.carouselHeadline}>{props.title}</h3>
            <Carousel>{mapSlideComponentImages(props.imagesArr)}</Carousel>
        </div>
    );
};

export default CarouselComp;
