import React, { useContext } from 'react';
import { ringContext } from '../../App';

const SpecialOne = (props) => {
    const {house} = props;
    const ring=useContext(ringContext)
    return (
        <div>
            <h3>Special One</h3>
            <p>{house}</p>
            <p>This ring passed without data drilling means without passing data parent to child this logic........</p>
            <p>This ring directly passed from root to special one</p>
            <h2>Only For You: {ring}</h2>
        </div>
    );
};

export default SpecialOne;