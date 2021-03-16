import React from 'react';
import {CountdownItem} from "./CountdownItem";
import './css/CountdownList.css';


export const CountdownList = ({array, deleteObj}) => {
    let items = array.map((item) =>
        <CountdownItem key={item.name} item={item} deleteObj={deleteObj}/>
    )

    return (
        <>
            {items}
        </>
    );

};


