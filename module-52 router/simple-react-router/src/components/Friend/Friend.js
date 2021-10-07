import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, address } = props.friend;
    const boxStyle = {
        border: "1px solid lightgray",
        padding: "20px",
        width: "400px",
        backgroundColor: "goldenrod",
        color: "white"

    }
    let history = useHistory();
    const handleFriendClick = () => {

        history.push(`friend/${id}`)

    }
    return (
        <div style={boxStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{address.city}</p>
            <Link to={`/friend/${id}`}>Details</Link>
            <br />
            <Link to={`/friend/${id}`}><button> see more</button></Link>
            <br />
            <button onClick={handleFriendClick}> see more details</button>

        </div>
    );
};

export default Friend;