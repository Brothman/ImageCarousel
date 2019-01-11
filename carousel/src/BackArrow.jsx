import React from 'react';

const BackArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.goToPrevImage}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default BackArrow;