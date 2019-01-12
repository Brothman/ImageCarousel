# ImageCarousel-
For RentedNY Freelance

This is a barebones image carousel to display your photographs on the internet. The image carousel is set to a width of 600px and autosizes all images to 600px width, with a max-height of 450px. Underneath the image carousel are tiny images of each photo, which a user can click to see the photo. There is also a counter to help remind you which image you are viewing. 

# How To Use
``` 
import ReactDOM from 'react-dom';
import React from 'react';
import Carousel from './Carousel';

let images = [
	'/img/landing1.jpg',
	'/img/landing2.jpg',
	'/img/landing3.jpg',
	'/img/landing4.jpg',
	'/img/landing5.jpg'
];

ReactDOM.render(<div className="image-carousel-container">
                  <Carousel images={images} />
                </div>, document.getElementById("root"));

```

