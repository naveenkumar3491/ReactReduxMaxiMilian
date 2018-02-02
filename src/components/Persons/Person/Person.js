import React from 'react';
import classes from './Person.css';

var person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hi Iam {props.name} with age {props.age}</p>
            <p>{props.children}</p>   
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;