import React, {useState, useEffect} from 'react';
import {CountdownList} from "./CountdownList";
import './css/Countdown.css';
import { motion } from "framer-motion"
import uuid from 'react-uuid'

import hny from "./css/images/hny.jpg";
import stranger_things from "./css/images/stranger-things-min.jpeg";
import university_gold from './css/images/lead-off-white-nike-air-force-1-university-gold-dd1876-700-release-date.jpeg';
import happy_birthday from './css/images/happy_birthday-min.jpeg';
import lacasa from './css/images/la_casa_de_papel-min.jpeg';
import avatar from './css/images/avatar-min.jpg';
import spiderman from './css/images/spider-man-no-way-home-logo-01-700x400-1-min.jpeg';
import money from './css/images/money-min.jpeg';
import fun from './css/images/fun.jpg';
import party from './css/images/party.jpg';
import job from './css/images/job.jpg';
import travel from './css/images/travel.jpg';
import sport from './css/images/sport.jpg';
export const Countdown = () => {




    const [countdownObjects, setCountObjects] = useState([
        {
            name: "New Year",
            date: "1 1 2022",
            image:hny,
            id: uuid()
        },
        // {
        //     name: "STRANGER THINGS SEASON 4",
        //     date: "30 July 2021",
        //     image: stranger_things,
        //     id: uuid()
        // },
        // {
        //     name: "Happy Birthday - 22",
        //     date: "13 July 2021",
        //     image: happy_birthday,
        //     id: uuid()
        //
        // },
        // {
        //     name: "LA CASA DE PAPEL SEASON 5 ",
        //     date: "20 August 2021",
        //     image: lacasa,
        //     id: uuid()
        // },
        // {
        //     name: "SPIDER-MAN: NO WAY HOME",
        //     date: "2 December 2021",
        //     image: spiderman,
        //     id: uuid()
        // },
        // {
        //     name: "AVATAR 2",
        //     date: "16 December 2022",
        //     image: avatar,
        //     id: uuid()
        // },
        // {
        //     name: "OFF-WHITE x Nike “University Gold”",
        //     date: "7 July 2021",
        //     image: university_gold,
        //     id: uuid()
        // },
        // {
        //     name: "30 years and 30 million in the bank account",
        //     date: "13 July 2029",
        //     image: money,
        //     id: uuid()
        // },
    ]);

    const [text,setText] = useState("");
    const [date,setDate] = useState("");
    const [image,setImage] = useState("");
    const handleChangeText =(e)=>{
        const value = e.target.value;
        setText(value);
    }
    const handleChangeDate =(e)=>{
        const value = e.target.value;
        setDate(value);
    }
    useEffect(()=>{
        getLocalCountdowns();
    }, []);
    useEffect(()=>{
        saveLocalCountdowns();
    }, [countdownObjects]);
    const handleSubmit =()=> {

        if (text !== "" && date !== "" && image !== ""){
            let obj = {
                name: text, date: date, id: uuid(), image: image
            }
            const updateCountdownObjects =[...countdownObjects, obj]
            setCountObjects(updateCountdownObjects)
            setDate("");
            setText("");

        }
    }
    const handleChangeRadio =(event)=> {
        console.log(event.target.value);
        setImage(event.target.value);
    }

        const deleteObject =(e)=>{
        let x = e.target.parentNode.parentNode.className;
        console.log(x.substring(4))
        setCountObjects(countdownObjects.filter((item)=> x.substring(4) !== item.id));
    }

    const saveLocalCountdowns = ()=>{
        localStorage.setItem("countdownObjects", JSON.stringify(countdownObjects));
    }
    const getLocalCountdowns =()=>{
        if(localStorage.getItem("countdownObjects") ===null)
        {
            localStorage.setItem("countdownObjects", JSON.stringify([]));
        }
        else {
            let countdownLocal= JSON.parse(localStorage.getItem("countdownObjects"));
            setCountObjects(countdownLocal);
        }
    }
    return (
        <div className="wrapper">


                <motion.div animate={{
                    rotate: [0, 2, -2, 0],
                }}
                    className='formCountdown'>
                    <motion.p
                        animate={{scale: [0.9,1,0.9,1,0.9]}}
                        transition={{ repeat: Infinity, duration: 5  }}
                    >Add countdown</motion.p>
                    <input className='formTitle' type="text" placeholder='Title...' value={text} onChange={handleChangeText}/>
                    <input className='formDate' type="date" min='2021-3-15' max="2032-12-31" value={date} onChange={handleChangeDate}/>
                    <div className="boxSelector">
                        <div className="selector" onChange={handleChangeRadio}>
                            <label>
                                <input type="radio" name="img" value={sport}/>
                                    <img src={sport}/>
                            </label>

                            <label>
                                <input type="radio" name="img" value={money}/>
                                    <img src={money}/>
                            </label>
                            <label>
                                <input type="radio" name="img" value={job}/>
                                <img src={job}/>
                            </label>
                            <label>
                                <input type="radio" name="img" value={party}/>
                                <img src={party}/>
                            </label>
                            <label>
                                <input type="radio" name="img" value={travel}/>
                                <img src={travel}/>
                            </label>

                            <label>
                                <input type="radio" name="img" value={fun}/>
                                <img src={fun}/>
                            </label>
                        </div>
                    </div>
                    <input className='formSubmit' value='ADD' type="submit" onClick={handleSubmit}/>
                </motion.div>
                <CountdownList array={countdownObjects} deleteObj={deleteObject}/>
        </div>
    );
};
