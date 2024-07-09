import React, {useState, useEffect} from 'react'


function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return() => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "pm" : "am"

        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return(
        <div className="clock-container">
           
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
            <h1>Good things take time</h1>
        </div>
    );
}
export default DigitalClock 