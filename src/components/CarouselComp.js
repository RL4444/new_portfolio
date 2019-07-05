import React from "react";
import Carousel from "nuka-carousel";
import CarouselSlide from "./CarouselSlide";
import ReactLoading from "react-loading";

const CarouselComp = props => {
    const styles = {
        carouselContainer: {
            marginTop: "5vh"
        },
        carouselHeadline: {
            color: "orange",
            marginBottom: "5vh",
            marginLeft: "4vw"
        }
    };

    const mapSlideComponentImages = dataProp => {
        if (dataProp) {
            console.log("what is coming up in this ", dataProp);
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
