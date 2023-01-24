import React from "react";
import { useContext } from 'react';
import { colorContext } from '../App.js';

export const ParentComponent = ({titulo,children}) => {
    const textColor = useContext(colorContext);


    return (
        <div>
            <h1 style={{color:textColor}}>{titulo}</h1>
            {children}
            <ChildComponent author="Alex Fernández" date="Today"/>
        </div>
    )
}

export const ChildComponent = ({author,date}) => {
    const textColor = useContext(colorContext);

    return (
        <p><small style={{color:textColor}}>By: <i>{author} <strong>({date})</strong></i></small></p>
    )
}

export default ParentComponent;