function date() {
    let date = new Date();
    let day = date.getDate();
    if(day<10) day="0"+day;
    let month = date.getMonth() + 1;
    if(month < 10) month = "0" + month;
    let year = date.getFullYear();
    document.querySelector(".date .disp").innerHTML = `<b>Date : </b>${day}/${month}/${year}`;
}

function time() {
    let date = new Date();
    let hours = date.getHours();
    if(hours >12){
        hours-=12;
    }
    if(hours<10)  hours="0"+hours;
    let minutes = date.getMinutes();
    if(minutes < 10) minutes = "0" + minutes;
    let seconds = date.getSeconds();
    if(seconds < 10) seconds = "0" + seconds;
    if(hours < 10) hours = "0" + hours;
    document.querySelector(".time .disp").innerHTML = `<b>Time : </b>${hours}:${minutes}:${seconds} ${date.getHours() >= 12 ? "PM" : "AM"}`;
}

date();
time();

setInterval(time, 1000);
setInterval(date, 1000*60*60*24);
