import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
       <div>
           <p>Hi my Name is {props.username} and I am a Programmer</p>
           <p>I am 21 year old and I like Coding</p>
       </div>
    )
}


export default UserOutput;