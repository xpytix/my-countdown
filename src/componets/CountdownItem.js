import React from 'react';
import './css/CountdownItem.css';
import Countdown from "react-countdown";
export const CountdownItem = ({item}) => {

    const countdownDate = new Date(item.date);
    const currentDate = new Date();
    const style={
        backgroundImage: `url(${item.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        opacity: 0.7
    }
    const totalSeconds = (countdownDate - currentDate);
    return (
        <Countdown
            date={Date.now() + totalSeconds}
            renderer={props => <div style={style} className={'box '+ item.name}>
                <h3 className='title'>{item.name}</h3>
                {props.days} : {props.hours} : {props.minutes} : {props.seconds}
            </div>}
        />
    );

};
