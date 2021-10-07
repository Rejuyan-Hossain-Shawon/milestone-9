import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    let history = useHistory();
    const { friendId } = useParams();
    const [friendDetails, setFriendDetails] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriendDetails(data))
    }, [friendId]);

    const handleFriendDetails = () => {
        history.push("/friends")

    }

    return (
        <div>
            <h3>Friend Detailsof {friendId}</h3>
            <h2>{friendDetails.name}</h2>
            <h2>{friendDetails.email}</h2>
            <h2>{friendDetails.phone}</h2>
            <h2>works at: {friendDetails.company?.name}</h2>
            <button onClick={handleFriendDetails}>Go Back to Friends</button>
        </div>
    );
};

export default FriendDetails;