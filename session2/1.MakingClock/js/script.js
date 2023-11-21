function getRealTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1; // Tháng bắt đầu từ 0
    var year = currentTime.getFullYear();
    var dayString = day+ " " + month+ " "+ year
    return [timeString,dayString];

}
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function digitalClock() {
    var body = document.body;
    var digitalTime = document.getElementById("digitalTime");
    if (!digitalTime) {
        digitalTime = document.createElement('p');
        digitalTime.id = "digitalTime";
        body.appendChild(digitalTime);
    }
    var digitalDay = document.getElementById("digitalDay");
    if (!digitalDay) {
        digitalDay = document.createElement('p');
        digitalDay.id = "digitalDay";
        body.appendChild(digitalDay);
    }
    var currentTime = getRealTime()[0];
    digitalTime.innerHTML = currentTime;
    digitalTime.style.position = "absolute";
    digitalTime.style.bottom = "10%"; 
    digitalTime.style.left = "50%";
    digitalTime.style.transform = "translateX(-50%)";
    digitalTime.style.color = "white"; 
    digitalTime.style.fontSize = "60px"; 
    var currentDay = getRealTime()[1];
    setInterval(function () {
        digitalClock();
    }, 1000);
}
function analogClock() {
    var currentTime = new Date();
    var curHours = currentTime.getHours();
    if (curHours>12){curHours-=12}
    var curMinutes = currentTime.getMinutes();
    var curSeconds = currentTime.getSeconds();
    const hours = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    hours.style.transform = "rotate(" + curHours*30 + "deg)";
    minute.style.transform = "rotate(" + curMinutes*6 + "deg)";
    second.style.transform = "rotate(" + curSeconds*6 + "deg)";
    var time = setInterval(function(){
        analogClock()
    },1000)
}
digitalClock();
analogClock();
