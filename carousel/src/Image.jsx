import React from 'react';
import CrossfadeImage from 'react-crossfade-image';


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <img className={`image image-${this.props.index}`} 
                 src={`${this.props.image}`}
                 onClick={() => this.props.fullScreen()} />
         );
    }
}
 
export default Image;


// <CrossfadeImage className="image" src={`${this.props.image}`} />