import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './ImageRotator.scss';

const ImageRotator = ({ images }) => {
    return (
        <div className="image-rotator">
            <Carousel interval={null}>
                {
                    images.length && images.map((image, idx) => (
                        <Carousel.Item key={`image-rotator-${idx}`}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="item"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ImageRotator;