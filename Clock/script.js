const hour=document.querySelector('.hours');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');


function time(){

    const now=new Date();
    
    const getSecond=now.getSeconds();
    // console.log(getSecond)
    const getMinute=now.getMinutes();
    // console.log(getMinute);
    const getHour=now.getHours();
    // console.log(getHour)
    console.log(now);
   
    const secondDegree=(getSecond/60)*360;
    console.log(secondDegree);

    const minuteDegree=(getMinute/60)*360;
    console.log(minuteDegree);

    const hourDegree=(getHour/12)*360;
    console.log(hourDegree)

    second.style.transform=`rotate(${secondDegree}deg)`
    minute.style.transform=`rotate(${minuteDegree}deg)`
    hour.style.transform=`rotate(${hourDegree}deg)`

}

// time();
setInterval(time,1000)