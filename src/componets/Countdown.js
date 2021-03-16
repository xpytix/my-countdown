import React, {useState} from 'react';
import {CountdownList} from "./CountdownList";
import './css/Countdown.css';
import hny from "./css/images/hny.jpg";
import stranger_things from "./css/images/stranger-things-min.jpeg";
import university_gold from './css/images/lead-off-white-nike-air-force-1-university-gold-dd1876-700-release-date.jpeg';
import happy_birthday from './css/images/happy_birthday-min.jpeg';
import lacasa from './css/images/la_casa_de_papel-min.jpeg';
import avatar from './css/images/avatar-min.jpg';
import spiderman from './css/images/spider-man-no-way-home-logo-01-700x400-1-min.jpeg';
import money from './css/images/money-min.jpeg';
import uuid from 'react-uuid'
export const Countdown = () => {




    const [countdownObjects, setCountObjects] = useState([
        {
            name: "New Year",
            date: "1 1 2022",
            image:hny,
            id: uuid()
        },
        {
            name: "STRANGER THINGS SEASON 4",
            date: "30 July 2021",
            image: stranger_things,
            id: uuid()
        },
        {
            name: "Happy Birthday - 22",
            date: "13 July 2021",
            image: happy_birthday,
            id: uuid()

        },
        {
            name: "LA CASA DE PAPEL SEASON 5 ",
            date: "20 August 2021",
            image: lacasa,
            id: uuid()
        },
        {
            name: "SPIDER-MAN: NO WAY HOME",
            date: "2 December 2021",
            image: spiderman,
            id: uuid()
        },
        {
            name: "AVATAR 2",
            date: "16 December 2022",
            image: avatar,
            id: uuid()
        },
        {
            name: "OFF-WHITE x Nike “University Gold”",
            date: "7 July 2021",
            image: university_gold,
            id: uuid()
        },
        {
            name: "30 years and 30 million in the bank account",
            date: "13 July 2029",
            image: money,
            id: uuid()
        },
    ]);

    const [text,setText] = useState("");
    const [date,setDate] = useState("");
    const handleChangeText =(e)=>{
        const value = e.target.value;
        setText(value);
    }
    const handleChangeDate =(e)=>{
        const value = e.target.value;
        setDate(value);
    }
    const handleSubmit =()=> {

        if (text !== "" && date !== "" ){
            let obj = {
                name: text, date: date, id: uuid()
            }
            const updateCountdownObjects =[...countdownObjects, obj]
            setCountObjects(updateCountdownObjects)
            setDate("");
            setText("")
        }
    }
    const deleteObject =(e)=>{
        let x = e.target.parentNode.parentNode.className;
        console.log(x.substring(4))
        setCountObjects(countdownObjects.filter((item)=> x.substring(4) !== item.id));
    }
    return (
        <div className="wrapper">
                <div className='formCountdown'>
                    <p>Add countdown</p>
                    <input className='formTitle' type="text" placeholder='Title...' value={text} onChange={handleChangeText}/>
                    <input className='formDate' type="date" min='2021-3-15' max="2032-12-31" value={date} onChange={handleChangeDate}/>
                    {/*<div className="selector">*/}
                    {/*    <input id="box1" type="radio" name="hny"/>*/}
                    {/*    <label className="radioImage hny" htmlFor="box1"> </label>*/}
                    {/*    <input id="box2" type="radio" name="money"/>*/}
                    {/*    <label className="radioImage money" htmlFor="box2"> </label>*/}
                    {/*    <input id="box3" type="radio" name="spiderman"/>*/}
                    {/*    <label className="radioImage spiderman" htmlFor="box3"> </label>*/}
                    {/*</div>*/}
                    <input className='formSubmit' value='ADD' type="submit" onClick={handleSubmit}/>
                </div>
                <CountdownList array={countdownObjects} deleteObj={deleteObject}/>
        </div>
    );
};
