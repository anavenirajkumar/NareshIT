const watch = require('./watches/digitalWatches');

// Indian Watch
setInterval(watch.indianWatch,1000);

// USA Watch
setInterval(watch.usaWatch,1000);

// China Watch
setInterval(watch.chinaWatch,1000);