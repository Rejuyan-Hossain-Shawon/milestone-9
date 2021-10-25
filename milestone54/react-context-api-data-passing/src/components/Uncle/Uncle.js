import React from 'react';

const Uncle = (props) => {
    const {house} = props;
    return (
        <div>
            <h3>Uncle</h3>
            <p>House:{house}</p>
        </div>
    );
};

export default Uncle;