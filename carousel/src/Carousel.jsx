import React from 'react';
import Image from './Image.jsx';
import TinyImage from './TinyImage.jsx';

import NextArrow from './NextArrow.jsx';
import BackArrow from './BackArrow.jsx';

import TinyImageCounter from './TinyImageCounter.jsx';

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
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Death.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Answering+Machine.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Albuquerque+Mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Fall+Day.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Love.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/The-Future-Is-Bright.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Struggle.jpg",
                "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Teardrop-park.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
         };
    }

    componentDidMount() {
        const image = document.querySelector('.image-0');
        image.style.opacity = 1;

        const tinyImage = document.querySelector('.tiny-image-0');
        tinyImage.style.opacity = 1;
    }

    goToPrevImage = () => {
        //edge case, go the end of array
        if (this.state.currentIndex === 0) {
            const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
            const oldTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex}`);

            const newImage = document.querySelector(`.image-${this.state.images.length - 1}`);
            const newTinyImage = document.querySelector(`.tiny-image-${this.state.images.length - 1}`);

            newImage.style.opacity = 1;
            newTinyImage.style.opacity = 1;
            oldTinyImage.style.opacity = 0.5;

            this.setState((prevState) => ({
                currentIndex: prevState.images.length - 1
            }), () => this.showFinalTinyImages());

            setTimeout(() => oldImage.style.opacity = 0, 150);
        }
        else {
            const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
            const oldTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex}`);

            const newImage = document.querySelector(`.image-${this.state.currentIndex - 1}`);
            const newTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex - 1}`);

            newImage.style.opacity = 1;
            newTinyImage.style.opacity = 1;
            oldTinyImage.style.opacity = 0.5;

            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex - 1
            }), () => this.adjustTinyImages());

            setTimeout(() => oldImage.style.opacity = 0, 150);
        }
    }

    goToNextImage = () => {
        //edge case, go to beginning of array
        if (this.state.currentIndex === this.state.images.length - 1) {
            const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
            const oldTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex}`);

            const newImage = document.querySelector(`.image-0`);
            const newTinyImage = document.querySelector(`.tiny-image-0`);

            newImage.style.opacity = 1;
            newTinyImage.style.opacity = 1;
            oldTinyImage.style.opacity = 0.5;

            this.setState((prevState) => ({
                currentIndex: 0
            }), () => this.resetTinyImages());

            setTimeout(() => oldImage.style.opacity = 0, 150);
        }
        else {
            const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
            const oldTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex}`);

            const newImage = document.querySelector(`.image-${this.state.currentIndex + 1}`);
            const newTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex + 1}`);

            newImage.style.opacity = 1;
            newTinyImage.style.opacity = 1;
            oldTinyImage.style.opacity = 0.5;

            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1
            }), () => this.adjustTinyImages());

            setTimeout(() => oldImage.style.opacity = 0, 150);
        }
    }

    goToSelectedImage = (index) => {
        if (this.state.currentIndex === index) {
            //do nothing if we are already viewing the image
            return;
        }
        const oldImage = document.querySelector(`.image-${this.state.currentIndex}`);
        const oldTinyImage = document.querySelector(`.tiny-image-${this.state.currentIndex}`);

        const newImage = document.querySelector(`.image-${index}`);
        const newTinyImage = document.querySelector(`.tiny-image-${index}`);

        newImage.style.opacity = 1;
        newTinyImage.style.opacity = 1;
        oldTinyImage.style.opacity = 0.5;

        this.setState((prevState) => ({
            currentIndex: index
        }), () => this.adjustTinyImages());

        setTimeout(() => oldImage.style.opacity = 0, 150);
    }

    adjustTinyImages = () => {
        // used for resetting back to start position
        if (this.state.currentIndex <= 8) {
           this.resetTinyImages();
        }
        else if (this.state.currentIndex >= 9 && this.state.images.length > 12) {
            const tinyImages = document.getElementsByClassName('tiny-image');

            for (let i = 0; i < tinyImages.length; i++) {
                //translate by the size of the tinyImage + margin
                tinyImages[i].style.transform = `translateX(${-50 * (this.state.currentIndex - 8)}px)`;
            }
        }
    }

    resetTinyImages = () => {
        // used for resetting back to start position
        const tinyImages = document.getElementsByClassName('tiny-image');

        for (let i = 0; i < tinyImages.length; i++) {
                //translate by the size of the tinyImage + margin
                tinyImages[i].style.transform = `translateX(0px)`;
        }
    }

    showFinalTinyImages = () => {
        // used for resetting back to start position
        const tinyImages = document.getElementsByClassName('tiny-image');

        for (let i = 0; i < tinyImages.length; i++) {
            //translate by the size of the tinyImage + margin
            tinyImages[i].style.transform = `translateX(${-50 * (this.state.images.length - 1 - 8)}px)`;
        }
    }

    fullScreen = () => {
        const image = document.querySelector('.image');
        if (image.style.height === '80%') {
            this.smallScreen();
        }
        else {
            const carousel = document.querySelector('.carousel');
            carousel.style.height = '100vh';
            carousel.style.width = "100vw";

            const images = document.getElementsByClassName('image');

            for (let i = 0; i < images.length; i++) {
                //translate by the size of the tinyImage + margin
                // images[i].className = `image-fullScreen`;
                images[i].style.height = '80%';
                images[i].style.width = 'auto';
                images[i].style.maxHeight = 'none';
                images[i].style.top = '50%';
                images[i].style.left = '50%';
                images[i].style.transform = 'translate(-50%, -50%)';
            }

            const nextArrow = document.querySelector('.nextArrow');
            const backArrow = document.querySelector('.backArrow');

            nextArrow.style.top = "50%";
            backArrow.style.top = "50%";
            nextArrow.style.left = "94%";

            const tinyImageContainer = document.querySelector('.tiny-image-container');
            tinyImageContainer.style.top = `94%`;
            tinyImageContainer.style.left = "20%";
            tinyImageContainer.style.maxWidth = "1200px";

            const tinyImageCounter = document.querySelector('.tiny-image-counter');
            tinyImageCounter.style.top = `91%`;
            tinyImageCounter.style.left = "20%";

            const modalBackground = document.querySelector('.modal-background');
            modalBackground.style.display = "block";
        }
    }

    smallScreen = () => {
        const carousel = document.querySelector('.carousel');
        carousel.style.height = '450px';
        carousel.style.width = "600px";

        const images = document.getElementsByClassName('image');

        for (let i = 0; i < images.length; i++) {
            //translate by the size of the tinyImage + margin
            // images[i].className = `image-fullScreen`;
            images[i].style.height = 'auto';
            images[i].style.width = '100%';
            images[i].style.maxHeight = '400px';
            images[i].style.top = '0';
            images[i].style.left = '0';
            images[i].style.transform = 'none';
        }

        const nextArrow = document.querySelector('.nextArrow');
        const backArrow = document.querySelector('.backArrow');

        nextArrow.style.top = "170px";
        backArrow.style.top = "170px";
        nextArrow.style.left = "525px";

        const tinyImageContainer = document.querySelector('.tiny-image-container');
        tinyImageContainer.style.top = `440px`;
        tinyImageContainer.style.left = "0";
        tinyImageContainer.style.maxWidth = "600px";

        const tinyImageCounter = document.querySelector('.tiny-image-counter');
        tinyImageCounter.style.top = `410px`;
        tinyImageCounter.style.left = "0";

        const modalBackground = document.querySelector('.modal-background');
        modalBackground.style.display = "none";
    }





    render() { 
        const images = this.state.images.map((image, index) => {
            return <Image key={index} image={image} index={index} fullScreen={this.fullScreen} />
        });

        const tinyImages = this.state.images.map((url, index) => {
            return <TinyImage key={index} url={url} index={index} goToSelectedImage={this.goToSelectedImage} />
        });

        return (
            <div className="carousel" >

                {images}
                <NextArrow goToNextImage={this.goToNextImage} />
                <BackArrow goToPrevImage={this.goToPrevImage} />

                <div className="tiny-image-container">
                 {tinyImages}
                </div>

                <TinyImageCounter index={this.state.currentIndex} size={this.state.images.length} />

                <div className="modal-background" onClick={this.smallScreen} />
            </div>
        );
    }
}
 
export default Carousel;

//                <Image image={this.state.images[this.state.currentIndex]} />
//                 <Image image={this.state.images[this.state.currentIndex]} index={this.state.currentIndex} />