import React from 'react';

const NextArrow = (props) => {
    return ( 
        <div className="nextArrow" onClick={props.goToNextImage}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
     );
}
 
export default NextArrow;