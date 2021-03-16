import React, {useState} from 'react';
import {CountdownItem} from "./CountdownItem";
import './css/CountdownList.css';
import hny from './css/images/hny.jpg';
import university_gold from './css/images/lead-off-white-nike-air-force-1-university-gold-dd1876-700-release-date.jpeg';
import stranger_things from './css/images/stranger-things-min.jpeg';
import happy_birthday from './css/images/happy_birthday-min.jpeg';
import lacasa from './css/images/la_casa_de_papel-min.jpeg';
import avatar from './css/images/avatar-min.jpg';
import spiderman from './css/images/spider-man-no-way-home-logo-01-700x400-1-min.jpeg';
import money from './css/images/money-min.jpeg';




export const CountdownList = ({array}) => {

    const [array1, setArray1] = useState(array);

    let items = array1.map((item) =>
        <CountdownItem key={item.name} item={item}/>
    );
    return (
        <>
            {items}
        </>
    );

};


