import React from "react";
import CarouselComp from "./CarouselComp";

const DesktopDisplay = () => {
    return (
        <div>
            <h3>This is DesktopDisplay</h3>
            <CarouselComp
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
            {/* <CarouselComp title="Favourite Code Places" /> */}
        </div>
    );
};
export default DesktopDisplay;
