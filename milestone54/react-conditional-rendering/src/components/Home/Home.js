import React from 'react';

const Home = (props) => {
  const {familar} = props;
let greeting; 
if(familar){
       greeting= <h3>Hellow how are you </h3>;
}
else{
    greeting=<h3>Who are you? i dont know you</h3>
}
    return (
        <div>
            <h1>Greeting</h1>
            <h3>{greeting}</h3>
            <h1>Food</h1>
            {
                familar?<h3>Lets go for a dinner</h3>:<h3>I cant go with you You are not familar to me </h3>
            }
            <h1>Contact</h1>
            {
                familar && <h3>Here is my mobile number 01720152305</h3>
            }
            <h1>Sharing</h1>
            {
                familar || <h3>I dont share anything with unfamilar</h3>
            }
        </div>
    );
};

export default Home;