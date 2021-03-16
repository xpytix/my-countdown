import React from 'react';
import './css/CountdownItem.css';
import Countdown from "react-countdown";
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
                <button onClick={deleteObj} className="deleteBtn"><i className="far fa-trash-alt"></i></button>
                <div className='countdown'>
                    <h3 className='title'>{item.name}</h3>
                    <p className='numbers'>{props.days}:{props.hours}:{props.minutes}:{props.seconds}</p>
                    <p className='days'> DAYS HOURS MINUTES SECONDS</p>
                </div>
            </div>}
        />
    );

};
