import React from 'react';
import {CountdownItem} from "./CountdownItem";
import './css/CountdownList.css';
import hny from './images/hny.jpg';
import university_gold from './images/lead-off-white-nike-air-force-1-university-gold-dd1876-700-release-date.jpeg';
import stranger_things from './images/stranger-things-min.jpeg';
import happy_birthday from './images/happy_birthday-min.jpeg';
import lacasa from './images/la_casa_de_papel-min.jpeg';
import avatar from './images/avatar-min.jpg';
import spiderman from './images/spider-man-no-way-home-logo-01-700x400-1-min.jpeg';
import money from './images/money-min.jpeg';
const countdownObjects = [
    {
        name: "New Year",
        date: "1 1 2022",
        image:hny
    },
    {
        name: "STRANGER THINGS SEASON 4",
        date: "30 July 2021",
        image: stranger_things
    },
    {
        name: "Happy Birthday - 22",
        date: "13 July 2021",
        image: happy_birthday
    },
    {
        name: "LA CASA DE PAPEL SEASON 5 ",
        date: "20 August 2021",
        image: lacasa
    },
    {
        name: "SPIDER-MAN: NO WAY HOME",
        date: "2 December 2021",
        image: spiderman
    },
    {
        name: "AVATAR 2",
        date: "16 December 2022",
        image: avatar
    },
    {
        name: "OFF-WHITE x Nike “University Gold”",
        date: "7 July 2021",
        image: university_gold
    },
    {
        name: "30 years and 30 million in the bank account",
        date: "13 July 2029",
        image: money
    },


]

export const CountdownList = () => {
    const items = countdownObjects.map((item) =>
        <CountdownItem key={item.name} item={item}/>
        );
    return (
        <div className="wrapper">
            {items}
        </div>
    );
};


