import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label for="userInput">Username</label> <br/>
            <input className="UserInputField" type="text" onChange={props.changed} value={props.currentUsername} id="userInput"/>
            <p> You have entered:- {props.currentUsername} </p>
        </div>
    )
}


export default UserInput;