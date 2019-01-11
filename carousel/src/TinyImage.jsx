import React from 'react';

const TinyImage = ({ url, index }) => {
    return ( 
        <img className={`tiny-image-${index}`} src={`${url}`} />
     );
}
 
export default TinyImage;