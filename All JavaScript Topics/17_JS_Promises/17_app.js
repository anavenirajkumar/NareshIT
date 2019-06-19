let doTask = (success,failure) => {
    // doing the task
    let isDone = false;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }
};
doTask(function (msg) {
    console.log(' From success ' + msg);
},function (msg) {
    console.log(' From failure ' +msg);
});

// Actual Promise in JavaScript
let cleanLaptop = new Promise((resolve, reject) => {
    // cleaning laptop
    let isCleaningOver = false;
    if(isCleaningOver){
        resolve('Laptop Cleaning is Done');
    }
    else{
        reject('Laptop Cleaning is NOT Done');
    }
});

cleanLaptop.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
});

// Dependent Promises
let doProject = new Promise((resolve, reject) => {
    // doing the project
    let isProjectDone = true;
    if(isProjectDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let attendTechnicalRound = new Promise((resolve, reject) => {
    // doing the Technical Round
    let isFinish = true;
    if(isFinish){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is NOT Finished');
    }
});

let attendManagerRound = new Promise((resolve, reject) => {
    // doing the Manager Round
    let isFinish = true;
    if(isFinish){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is NOT Finished');
    }
});

let attendHRRound = new Promise((resolve, reject) => {
    // doing the HR Round
    let isFinish = true;
    if(isFinish){
        resolve('HR Round is Finished');
    }
    else{
        reject('HR Round is NOT Finished');
    }
});

// call the dependent Promises
doProject.then((msg) => {
    let theMsg = ` ${msg} > `;
    attendTechnicalRound.then((msg) => {
        theMsg += ` ${msg} > `;
        attendManagerRound.then((msg) => {
            theMsg += ` ${msg} > `;
            attendHRRound.then((msg) => {
                theMsg += ` ${msg} > GOT JOB!!`;
                console.log(theMsg);
            }).catch((msg) => {
                console.error(msg);
            });
        }).catch((msg) => {
            console.error(msg);
        });
    }).catch((msg) => {
        console.error(msg);
    });
}).catch((msg) => {
    console.error(msg);
});