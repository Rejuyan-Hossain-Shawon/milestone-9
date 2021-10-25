import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house,setHouse} = props;
    return (
        <div >
            <h3>GrandFather</h3>
            <p>House:{house}</p>
            <button onClick={()=>setHouse(house+1)}>Add hosue</button>
            <div style={{display:'flex'}}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;