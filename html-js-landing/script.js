let day = document.querySelector("#day")
let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")

let goalTime = new Date("May 6, 2021 17:30:00").getTime();

function strfy(num) {
    if (num < 10) return '0' + num;
    return '' + num;
}

function getTime(time) {
    let day;
    let hour;
    let minute;
    let second;
    let tempTime = Math.floor(time / 1000);
    day = Math.floor(tempTime / (24 * 60 * 60));
    day = strfy(day);
    tempTime = tempTime % (24 * 60 * 60);
    hour = Math.floor(tempTime / (60 * 60));
    hour = strfy(hour);
    tempTime = tempTime % (60 * 60);
    minute = Math.floor(tempTime / 60);
    minute = strfy(minute)
    second = tempTime % 60;
    second = strfy(second)
    return { day, hour, minute, second };
}

setInterval(() => {
    let now = new Date().getTime();
    let difference = goalTime - now;
    let time = getTime(difference);
    day.textContent = time.day;
    hour.textContent = time.hour;
    minute.textContent = time.minute;
    second.textContent = time.second;
}, 1000);