import React from 'react';
import Image from './Image.jsx';
import TinyImage from './TinyImage.jsx';

import NextArrow from './NextArrow.jsx';
import BackArrow from './BackArrow.jsx';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
         };
    }

    componentDidMount() {
        const image = document.querySelector('.image-0');
        image.style.opacity = 1;
    }

    goToPrevImage = () => {
        const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);

        const newImage = document.querySelector(`.image-${this.state.currentIndex - 1}`);
        newImage.style.opacity = 1;

        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1
        }));


        setTimeout(() => oldImage.style.opacity = 0, 150);
    }

    goToNextImage = () => {
        const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
        // oldImage.style.opacity = 0;

        const newImage = document.querySelector(`.image-${this.state.currentIndex + 1}`);
        newImage.style.opacity = 1;

        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1
        }));

        setTimeout(() =>  oldImage.style.opacity = 0, 150);
    }

    imageWidth = () => {
        return document.querySelector('.image').clientWidth;
    }



    render() { 
        const images = this.state.images.map((image, index) => {
            return <Image key={index} image={image} index={index} />
        });

        const tinyImages = this.state.images.map((url, index) => {
            return <TinyImage key={index} url={url} index={index} />
        });

        return (
            <div className="carousel">

                {images}
                <NextArrow goToNextImage={this.goToNextImage} />
                <BackArrow goToPrevImage={this.goToPrevImage} />
            </div>
        );
    }
}
 
export default Carousel;

//                <Image image={this.state.images[this.state.currentIndex]} />
//                 <Image image={this.state.images[this.state.currentIndex]} index={this.state.currentIndex} />