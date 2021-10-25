import React from 'react';

const Sister = (props) => {
    const {house} = props;
    return (
        <div>
           <h3>Sister</h3> 
           <p>House:{house}</p>
        </div>
    );
};

export default Sister;