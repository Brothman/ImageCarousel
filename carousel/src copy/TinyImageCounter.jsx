import React from 'react';

const TinyImageCounter = ({ index, size }) => {
    return ( 
        <div className="tiny-image-counter">
            {index + 1} of {size}
        </div>
     );
}
 
export default TinyImageCounter;