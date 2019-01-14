import React from 'react';

const Image = ({ url, index, fullScreen }) => {
    return ( 
        <img className={`image image-${index}`}
            src={`${url}`}
            onClick={() => fullScreen()} />
     );
}
 
export default Image;