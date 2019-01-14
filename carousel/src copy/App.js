import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel.jsx';

class App extends Component {

  render() {
    const images = [
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
    ];
    
    return (
      <div className="App">
        <Carousel images={images} />
      </div>
    );
  }
}

export default App;
