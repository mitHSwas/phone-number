import React, { useState } from 'react';

const Person = (props) => {
    const {name, picture, email, phone} = props.user
    const [number, setNumber] = useState("");
    const showNumber = () => setNumber(phone)
    const personStyle = {
        border: "1px solid gray",
        margin: "20px",
        padding: "30px",
    }
    return (
        <div style={personStyle}>
            <div>
                <img src={picture.large} alt="" />
            </div>
            <div>
                <h2>Name: {name.first + " " + name.last} </h2>
                <p>email: {email}</p>
                <p>Learn about me</p>
                <p>Phone Number: {number}</p>
                <button onClick={showNumber}>show number</button>
                <br />
                <button onClick={() => props.addPerson(props.user)}>add me</button>    
            </div>    
        </div>
    );
};

export default Person;