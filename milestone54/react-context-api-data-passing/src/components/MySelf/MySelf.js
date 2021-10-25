import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const MySelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h3>MySelf</h3>
            <p>House:{house}</p>
            <SpecialOne house={house}></SpecialOne>

        </div>
    );
};

export default MySelf;