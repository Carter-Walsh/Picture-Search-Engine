import "./ImageList.css"
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    // This is destructuring the images array into id, urls and description values
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;