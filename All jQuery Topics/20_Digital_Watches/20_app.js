// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    $('#indian-time').text(time);
    $('#indian-date').text(date);
};
setInterval(indianWatch,1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    $('#usa-time').text(time);
    $('#usa-date').text(date);
};
setInterval(usaWatch,1000);

// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    $('#china-time').text(time);
    $('#china-date').text(date);
};
setInterval(chinaWatch,1000);