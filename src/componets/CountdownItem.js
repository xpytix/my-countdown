import React from 'react';
import './css/CountdownItem.css';
import Countdown from "react-countdown";
import { motion } from "framer-motion"
export const CountdownItem = ({item, deleteObj}) => {

    const countdownDate = new Date(item.date);
    const currentDate = new Date();
    const style={

    }
    const totalSeconds = (countdownDate - currentDate);
    return (
        <Countdown className='box'
            date={Date.now() + totalSeconds}
            renderer={props => <div style={style} className={'box '+ item.id}>
                <img src={item.image} className={'background'}/>
                <motion.button
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={deleteObj} className="deleteBtn">
                    <i className="far fa-trash-alt"></i>
                </motion.button>
                <motion.div
                    className='countdown'>
                    <h3 className='title'>{item.name}</h3>
                    <p className='numbers'>{props.days}:{props.hours}:{props.minutes}:{props.seconds}</p>
                    <p className='days'> DAYS HOURS MINUTES SECONDS</p>
                </motion.div>
            </div>}
        />
    );

};
