import React from 'react';

const Person = (props) => {
    return (
        <>
        <h1>Hi, I'm a React App</h1>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        </>
    )
    
}

export default Person;