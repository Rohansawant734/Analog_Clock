setInterval(() => {
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    hrotation = 30 * hour + minute / 2;
    mrotation = 6 * minute;
    srotation = 6 * second;
    
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);


// formula for hour hand is = 30 X h + m / 2----> 12 hrs = 360, 1hr = 360/12 = 30degrees | 60mins = 30deg -> 1 = 1/2 deg -> m = m/2deg rotation
// formula for minute hand is = 6 X m -----> 60mins = 360deg -> 1min = 6deg 
// formula for seconds hand is = 6 X s -----> 60secs = 360deg -> 1sec = 6deg 