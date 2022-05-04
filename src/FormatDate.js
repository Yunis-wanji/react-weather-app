import React from "react"


export default function FormatDate(props){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur","Fri", "Sat"]
    let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "sept", "Oct", "Nov", "Dec"]
let day = days[props.date.getDay()];
let date = props.date.getDate();
let hours = props.date.getHours();
if (hours<10){
    hours=`0${hours}`;
}
let mins = props.date.getMinutes();
if(mins<10){
    mins=`0${mins}`;
}
let month = months[props.date.getMonth()];

    return <div>
    {hours}:{mins}
    <div>
     {day}, {date} {month}
     </div>
        
    </div>
}