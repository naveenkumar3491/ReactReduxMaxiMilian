import React from 'react';

var person = (props) => {
    return (
        <div>
            <p>Hi Iam {props.name} with age {props.age}</p>
            <p>{props.children}</p>   
        </div>
    )
}

export default person;