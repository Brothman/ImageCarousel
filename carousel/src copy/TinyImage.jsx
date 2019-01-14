import React from 'react';

const TinyImage = ({ url, index, goToSelectedImage }) => {
    return ( 
        <img className={`tiny-image tiny-image-${index}`} 
             src={`${url}`}
             onClick={() => {goToSelectedImage(index)}}
             />
     );
}
 
export default TinyImage;