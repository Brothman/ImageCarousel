import React from 'react';
import CrossfadeImage from 'react-crossfade-image';


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        const image = document.querySelector('.image');
        // image.style.opacity = 1;
        // setTimeout(() => image.style.opacity = 1, 1000);
    }


    render() { 
        return ( 
            <img className={`image image-${this.props.index}`} src={`${this.props.image}`} />

         );
    }
}
 
export default Image;


// <CrossfadeImage className="image" src={`${this.props.image}`} />